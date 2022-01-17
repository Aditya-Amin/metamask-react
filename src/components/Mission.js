import React, { Component } from 'react';
// import a from '../assets/img/images/a.png';
// import b from '../assets/img/images/b.png';
import gif from '../assets/img/images/38431.gif';
import ConnectWalletButton from './ConnectWalletButton';

export class Mission extends Component {
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
                    <div className="section-title mb-45 mb-20 mint_title">
                        <h2 className="title"><span>Katana Inu</span> NFT-Gaming</h2>
                    </div>
                    <div className="mission-content text-center">
                        <p>YOU CAN PURCHASE NOW ON PANCAKE SWAP AND UNISWAP<br />
                        We will lead this huge project to create massive value in the cryptocurrency space.
                        </p>
                        <div className="mt-10 c_price">Current Price</div>
                        <h3 className="c_rate font-weight-bold mb-4">1ETH = 5333333$KATA</h3>
                        {/* <ul className="mint_nft">
                        <li><a href="https://pancakeswap.finance/swap?outputCurrency=0x6D6bA21E4C4b29CA7Bfa1c344Ba1E35B8DaE7205" target="_blank" rel="noreferrer"><img src={a} alt="Mission"/></a></li>
                        <li><a href="https://app.uniswap.org/#/swap?inputCurrency=0x2e85ae1C47602f7927bCabc2Ff99C40aA222aE15" target="_blank" rel="noreferrer"><img src={b} alt="Mission"/></a></li>
                        </ul> */}
                        <ConnectWalletButton/>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}

export default Mission
