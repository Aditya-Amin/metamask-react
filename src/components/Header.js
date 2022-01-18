import React from 'react';
import logo from '../Logo.png';
import ConnectWalletButton from './ConnectWalletButton';


export default class Header extends React.Component {
    

    render(){
        
    
        return (
            <header>
                <div className="header-top-area">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 m-auto ">
                            <div className="header-social justify-content-center">
                            <span>Follow us on :</span>
                            <ul>
                                <li><a href="/#"><i className="fab fa-facebook-f" /></a></li>
                                <li><a href="/#"><i className="fab fa-twitter" /></a></li>
                                <li><a href="/#"><i className="fab fa-pinterest-p" /></a></li>
                                <li><a href="/#"><i className="fab fa-linkedin-in" /></a></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div id="sticky-header" className="menu-area">
                <div className="container">
                    <div className="row">
                    <div className="col-12">
                        <div className="mobile-nav-toggler"><i className="fas fa-bars" /></div>
                        <div className="menu-wrap">
                            <nav className="menu-nav d-flex justify-content-between">
                                <div className="logo">
                                    <a href="/#"><img src={logo} alt="" /></a>
                                </div>
                                <div className="header-action d-none d-sm-block">
                                    <ConnectWalletButton/>
                                </div>
                            </nav>
                        </div>
                
                    </div>
                    </div>
                </div>
                </div>
                
            </header>
        )
    }
}