import React from 'react';
import './Header.css';
import logo from '../assets/img/logo/logo.png';
import ConnectWalletButton from './ConnectWalletButton';


export default class Header extends React.Component {
    

    render(){
        
    
        return (
            <header>
                <div className="header-top-area">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="header-top-offer">
                        <p>SALE COMING SOON - We are still working on Katana Inu</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="header-social">
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
                        <nav className="menu-nav">
                            <div className="logo">
                            <a href="/#"><img src={logo} alt="" /></a>
                            </div>
                            <div className="navbar-wrap main-menu d-none d-lg-flex">
                            <ul className="navigation">
                                <li className="active"><a href="/#">Gaming</a></li>
                                <li><a href="/#">Tokenomics</a></li>
                                <li><a href="/#">Why Katana Inu</a></li>
                                <li><a href="/#">roadmap</a></li>
                                <li><a href="/#">contact</a></li>
                                <li><a href="/#">FAQ</a></li>
                            </ul>
                            </div>
                            <div className="header-action d-none d-sm-block">
                                <ConnectWalletButton/>
                            </div>
                        </nav>
                        </div>
                        {/* Mobile Menu  */}
                        <div className="mobile-menu">
                        <nav className="menu-box">
                            <div className="close-btn"><i className="fas fa-times" /></div>
                            <div className="nav-logo"><a href="index.html"><img src={logo} alt="" title="true" /></a>
                            </div>
                            <div className="menu-outer">
                            {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                            </div>
                            <div className="social-links">
                            <ul className="clearfix">
                                <li><a href="/#"><span className="fab fa-twitter" /></a></li>
                                <li><a href="/#"><span className="fab fa-facebook-square" /></a></li>
                                <li><a href="/#"><span className="fab fa-pinterest-p" /></a></li>
                                <li><a href="/#"><span className="fab fa-instagram" /></a></li>
                                <li><a href="/#"><span className="fab fa-youtube" /></a></li>
                            </ul>
                            </div>
                        </nav>
                        </div>
                        <div className="menu-backdrop" />
                        {/* End Mobile Menu */}
                    </div>
                    </div>
                </div>
                </div>
                {/* header-search */}
                <div className="search-popup-wrap" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="search-close"><i className="fas fa-times" /></div>
                <div className="search-wrap text-center">
                    <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <h2 className="title">... Search Here ...</h2>
                        <div className="search-form">
                            <form action="#">
                            <input type="text" name="search" placeholder="Type keywords here" />
                            <button className="search-btn"><i className="fas fa-search" /></button>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* header-search-end */}
                
            </header>
        )
    }
}