// import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/kfcLogo.492728c6.svg";
import AccountIcon from "../assets/Account_Icon.svg";
import Cart from "../assets/bucket_cart_icon.svg";
import "../css/Header.css";
import location from '../assets/search-pin.svg';
import StartOrderPopUp from "./StartOrderPopUp";
const Header = () => {
    return (
        <>
            <header className="mainHeader">
                <div className="location">
                    <img src={location} alt="search-pin" />
                    <span>Allow location access for local store menu and promos</span>
                    <button>Set Location</button>
                </div>
                <div className="header">
                    <div className="leftDiv">
                        <div className="logo">
                            <Link to={'/'} className="inner-div">
                                <img src={logo} alt="logo" />
                            </Link>
                            
                        </div>
                        <div className="button">
                            <Link to={"/menu"} style={{ color: "#202124" }}>
                                Menu
                            </Link>
                            <Link to={"/deals"} style={{ color: "#202124" }}>
                                Deals
                            </Link>
                        </div>
                    </div>
                    <div className="rightDiv">
                        <div className="userAccountIcon">
                            <img src={AccountIcon} alt="accountIcon" />
                            <Link
                                className="signIn"
                                to={"/signIn"}
                                style={{
                                    color: "#202124",
                                    lineHeight: "2vh",
                                    fontWeight: "700",
                                    fontSize: "14px",
                                }}
                            >
                                Sign In
                            </Link>
                        </div>
                        <div className="cart">
                            <span className="cartValue">₹0</span>
                            <img src={Cart} alt="cart" onClick={()=>{
                                <StartOrderPopUp/>
                            }} />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
