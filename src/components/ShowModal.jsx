import {useEffect, useState} from 'react'
import { createPortal } from 'react-dom';
import { RxCross1 } from "react-icons/rx";
import BackIcon from "../assets/GoBackIcon.svg";
import LocationArrow from '../assets/LocationArrow.svg';
import LocationPin from '../assets/search-pin.svg';
import '../css/ShowModal.css';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
const ShowModal = ({handleModal}) => {
    // const [start, setStart] = useState(true);
    const start = true;
    const [delivery, setDelivery] = useState(false);
    const [pickup, setPickup] = useState(false);
    const [dineIn, setDineIn] = useState(false);
    useEffect(()=>{
        document.body.style.overflowY = "hidden";
        return  () =>{
            document.body.style.overflowY = "scroll";
        };
    },[]);

    // const handleStart = () => setStart(true);
    const handleDelivery = () => setDelivery(delivery ? false : true);
    const handlePickup = () => setPickup(pickup ? false : true);
    const handleDineIn =() => setDineIn(dineIn ? false : true);
    

    const Start = (
        <div className="popup">
            <div className="popupHeading">
                <button style={{display:'none'}}></button>
                <h1>START YOUR ORDER</h1>
                <RxCross1 className="exit" onClick={handleModal} />
            </div>
            <div className="popUpBody">
                <h1>How would you like to receive your order?</h1>
                <button onClick={handleDelivery}>Delivery</button>
                <button onClick={handlePickup}>Pick up</button>
                <button onClick={handleDineIn}>Dine in</button>
            </div>
        </div>
    );

    const Delivery = (
        <div className="popup" style={{position:'fixed',top:0}}>
            <div className="popupHeading">
                <button onClick={handleDelivery}><img src={BackIcon} alt="backIcon" /></button>
                <h1>Delivery Address</h1>
                <RxCross1 className="exit" onClick={handleModal} />
            </div>
            <div className="popUpBody">
                <div className="signIn">
                    <span >Already a member?<Link>Sign In</Link></span>
                    <div className="setLocation">
                        <img src={LocationArrow} alt="" />
                        <span>Use My Location</span>
                    </div>    
                </div>
                
                <div className="inputLocation">
                    <div className="input">
                        <img src={LocationPin} alt="pin" />
                        <input type="text" placeholder="Search for area, street name..."/>
                    </div>
                    <div className="button">
                        <button>Confirm</button>
                    </div>
                    
                </div>
                <span></span>
                <div className="enterLocation">

                </div>
                
            </div>
        </div>
    );
    const Pickup = (
        <div className="popup" style={{position:'fixed',top:0,backgroundColor:'crimson'}}>
            <div className="popupHeading">
                <button onClick={handlePickup}><img src={BackIcon} alt="backIcon" /></button>
                <h1>START YOUR ORDER</h1>
                <RxCross1 className="exit" onClick={handleModal} />
            </div>
            <div className="popUpBody">
                <h1>How would you like to receive your order?</h1>
                <button>Delivery</button>
                <button>Pick up</button>
                <button>Dine in</button>
            </div>
        </div>
    );
    const DineIn = (
        <div className="popup" style={{position:'fixed',top:0,backgroundColor:'cyan'}}>
            <div className="popupHeading">
                <button onClick={handleDineIn}><img src={BackIcon} alt="backIcon" /></button>
                <h1>START YOUR ORDER</h1>
                <RxCross1 className="exit" onClick={handleModal} />
            </div>
            <div className="popUpBody">
                <h1>How would you like to receive your order?</h1>
                <button>Delivery</button>
                <button>Pick up</button>
                <button>Dine in</button>
            </div>
        </div>
        // <h1>DineIn</h1>
    );
  return createPortal(
    <>
        <div className="modal-wrapper"></div>
        <div className="modal-container">
            {start ? Start : ""}
            {delivery ? Delivery : ""}
            {pickup ? Pickup : ""}
            {dineIn ? DineIn : ""}
        </div> 
    </>, 
    document.querySelector("#modal")
  )
}

export default ShowModal