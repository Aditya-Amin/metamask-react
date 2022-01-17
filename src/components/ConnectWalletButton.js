import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

export class ConnectWalletButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: '',
            account: '',
            modal:false
        }
        this.handleConnectWallet = this.handleConnectWallet.bind(this);
        this.handleDisconnectWallet = this.handleDisconnectWallet.bind(this);
    }

    componentDidMount(){
        if(localStorage.getItem("isMetaMaskConnected") === 'true'){
            this.isMetaMaskConnected();
        }


        window.ethereum.on("accountsChanged", () => {
            if(localStorage.getItem("isMetaMaskConnected") === 'true'){
                this.handleDisconnectWallet();
            }
        })
    }

    handleConnectWallet(){
        const ethereum = window.ethereum;
        if(ethereum){
            ethereum.request({method: 'eth_requestAccounts'})
            .then(accounts => {
                this.setState({account:accounts[0]});
                localStorage.setItem("isMetaMaskConnected", true);
            })
            .catch(error => {
              console.error(error);
            })
        }else{
            this.setState({error: 'Please install metamask extension first!', modal:true})
        }
    }

    isMetaMaskConnected(){
        const ethereum = window.ethereum;
        if(ethereum){
            ethereum.request({method: 'eth_accounts'})
            .then(accounts => {
                this.setState({account:accounts[0]});
                console.log(accounts);
            })
            .catch(error => {
              console.error(error);
            })
        }
    }

    handleDisconnectWallet(){
        localStorage.removeItem("isMetaMaskConnected");
        this.setState({ account: ''});
        console.log("Disconnected")
    }

    render() {
        return (
            <div className="header-btn d-none d-xl-block">
                {this.state.account ? <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle text-truncate" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        { this.state.account.substring(0, 10) }
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="/#" onClick={this.handleDisconnectWallet}>Disconnect</a></li>
                    </ul>
                </div>
                : <a href="/#" className="btn" id="connect-wallet"  onClick={this.handleConnectWallet}>{ !this.state.account ? 'Connect Wallet' : 'Connected' }</a>
                }

                <Modal 
                    show={this.state.modal} 
                    onHide={() => this.setState({modal:false})} 
                    animation={false} 
                    centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Metamask Error</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.state.error}</Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default ConnectWalletButton
