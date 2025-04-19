// import React from 'react'
import '../css/SignIn.css';
import logo from '../assets/kfcLogo.492728c6.svg'

const SignIn = () => {
return (
    <>
        <div className="signIn-container">
            <div className="signIn-heading" style={{display:'flex', gap:'1vw'}}>
                <span>Sign In</span> / <span>Sign Up</span>
            </div>
            <div className="signIn-logo">
                <img src={logo} alt="logo" />
            </div>
            
            <div className="contact-detail">
                <span id='contact-detail-heading'>Let’s Sign In or Create account with your phone number!</span>
                <input type="text" name="phone" id="phone" placeholder='Phone Number*' />
                <span id='tandc'>By “logging in to KFC”, you agree to our Privacy Policy and <span>Terms & Conditions</span>.</span>
                <button className='sendCode'>Send Me a Code</button>
                <hr /><span>or</span><hr />
                <button className='guestLogin'>Skip, Continue As Guest</button>
            </div>
        </div>
    </>
  );
};

export default SignIn;
