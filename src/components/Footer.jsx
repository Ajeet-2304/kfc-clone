// import React from 'react'
import KfcLogo from '../assets/footer/KFC_Logo.svg';
import FindKfc from '../assets/footer/Find_KFC.svg';
import AppleLogo from '../assets/footer/apple.svg';
import GoogleLogo from '../assets/footer/google_play.svg';
import InstagramLogo from '../assets/footer/Social_Insta_White.svg';
import FacebookLogo from '../assets/footer/Social_Facebook_White.svg';
import TwitterLogo from '../assets/footer/Social_Twitter_White.svg';
import '../css/Footer.css';


const Footer = () => {
  const getLocation = () =>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(showPosition);
    }else { 
      return "Geolocation is not supported by this browser.";
    }
  }
  const showPosition = (position) => {
    // "Latitude: " + position.coords.latitude + 
    // "<br>Longitude: " + position.coords.longitude;
    console.log(position.coords.latitude, position.coords.longitude);
  }
  return (
    <>
      <div className="footer">
        <div className="footer-body">
          <div className="logo">
            <img src={KfcLogo} alt="kfc-logo" />
          </div>
          <div className="links">
            <ul>
              <span>KFC India</span>
              <li>About KFC</li>
              <li>KFC Care</li>
              <li>Careers</li>
              <li>Our Golden Past</li>
              <li>Responsible Disclosure</li>
            </ul>
            <ul>
              <span>Legal</span>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Disclaimer</li>
              <li>Caution Notice</li>
            </ul>
            <ul>
              <span>KFC Food</span>
              <li>Menu</li>
              <li>Order Lookup</li>
              <li>Gift Card</li>
              <li>Nutrition & Allergen</li>
            </ul>
            <ul>
              <span>Support</span>
              <li>Get Help</li>
              <li>Contact Us</li>
              <li>KFC Feedback</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="findKfc" onClick={()=>{getLocation()}}>
            <img src={FindKfc} alt="find-kfc" />
            <span>Find a KFC</span>
          </div>
          <div className="appLinks">
            <a href="https://play.google.com/store/apps/details?id=com.yum.kfc"><img src={GoogleLogo} alt="PlayStore" /></a>
            <a href="https://apps.apple.com/in/app/kfc-india-online-ordering-app/id915824379"><img src={AppleLogo} alt="App-Store" /></a>
          </div>
        </div>
        <div className="copyright">
          <span>Copyright © KFC Corporation 2024 All rights reserved</span>
          <div className="socialIcons">
            <img src={InstagramLogo} alt="instagram" />
            <img src={FacebookLogo} alt="facebook" />
            <img src={TwitterLogo} alt="twitter" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer