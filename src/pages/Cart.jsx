import React, { useState } from 'react'
import strips from '../assets/Strips.svg';
import cartEmpty from '../assets/empty_cart.png';
import '../css/Cart.css';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Cart = () => {
    const [cartItem, setCartItem] = useState(0);
  return (
    <>
        <div className="cart-comp">
            
            <div className="strips">
                <img src={strips} alt="strips" />
            </div>
            <div className="cart-heading">
                <h1>My Cart</h1>
            </div>
            <div className="cart-data">
                {
                    cartItem === 0 ? 
                    <div className="empty-cart">
                        <h2>YOUR CART IS EMPTY. LET'S START AN ORDER!</h2>
                        <img src={cartEmpty} alt="empty cart " />
                    </div> : 
                    <div className="cart-items">You have {cartItem} items in your cart</div>
                }
            </div>
            <div className="help">
                <span >STILL HAVE A QUESTION?</span><hr style={{width:'22vw'}}/>
                <div className="btn">
                    <button><FaPhoneAlt/>Call Us</button>
                    <button><IoMail/>Contact Us</button>
                </div>            
            </div>
        </div>

    </>
  )
}

export default Cart