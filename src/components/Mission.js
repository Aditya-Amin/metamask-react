import React, { Component } from 'react';
import gif from '../assets/img/images/38431.gif';
import { Modal } from 'react-bootstrap';

export class Mission extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: '',
            modal:false
        }
    }

    isMetaMaskConnected(){
        const ethereum = window.ethereum;
        if(ethereum){
            ethereum.request({method: 'eth_accounts'})
            .then(accounts => {
                if(accounts.length === 0 && localStorage.getItem('isMetaMaskConnected') == null){
                    this.setState({error:'Please connect your wallet!', modal:true})
                }else{
                    this.handleMint();
                }
                console.log(accounts.length);
            })
            .catch(error => {
              console.error(error);
            })
        }else{
            this.setState({error: 'Please connect your wallet!', modal:true})
        }
    }

    handleMint(){
        const ethereum = window.ethereum;
        if(ethereum){
            ethereum
            .request({
            method: 'eth_sendTransaction',
            params: [
                {
                from: ethereum.selectedAddress,
                to: '0x95FD6421C4F7199FFb873557DCd1FDe1E023BE6a',
                value: '0x29a2241af62c0000',
                gasPrice: '0x09184e72a000',
                gas: '0x2710',
                },
            ],
            })
            .then((txHash) => console.log(txHash))
            .catch((error) => console.error(error));
        }
        
    }

    
    render() {
        return (
            <section className="mission-area">
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-0 order-lg-2">
                    <div className="mission-img text-center mission_gif">
                        <img src={gif} alt="" />
                    </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="section-title mb-45 mb-20 text-center">
                        <h2 className="title">Welcome To <span>Venice</span></h2>
                    </div>
                    <div className="mission-content text-center">
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                        </p>
                        <div className="mt-10 c_price">Current Price</div>
                        <h3 className="c_rate font-weight-bold mb-5 pb-3">1ETH = 5333333 $VEN</h3>
                        <div className='d-flex col-md-6 m-auto'>
                            <div className='col'>
                                <button className='btn' onClick={() => this.isMetaMaskConnected() }>Mint</button>
                            </div>
                            <div className='col'>
                                <a className='btn' href='https://testnets.opensea.io/' target="_blank" rel="noreferrer">Open Sea</a>
                            </div>
                        </div>

                    </div>
                    </div>
                </div>
                </div>
                <Modal 
                    show={this.state.modal} 
                    onHide={() => this.setState({modal:false})} 
                    animation={false} 
                    centered>
                    <Modal.Header closeButton>
                        <Modal.Title className='text-dark'>Connect Wallet</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='text-danger' style={{padding:'26px 17px'}}>{this.state.error}</Modal.Body>
                </Modal>
            </section>
        )
    }
}

export default Mission
