// import React from 'react'
import { useState } from 'react';
// import '../css/StartOrderPopUp.css';
import { RxCross1 } from "react-icons/rx";
// eslint-disable-next-line react/prop-types
const StartOrderPopUp = ({handleClick}) => {
  const [start, setStart] = useState(true);
  const [delivery, setDelivery] = useState(false);
  const [pickup, setPickup] = useState(false);
  const [dineIn, setDineIn] = useState(false);

  const handleStart = () => setStart(start ?  true  : false)
  const handleDelivery = () => setDelivery(delivery ?  false  : true)
  const handlePickup = () => setPickup(pickup ?  false  : true )
  const handleDineIn = () => setDineIn(dineIn ?  false  : true)
  return (
    <>

        {/* {
          <Start handleClick={handleClick} handleDelivery={handleDelivery} handlePickup={handlePickup} handleDineIn={handleDineIn}/>
        } */}
      {/* {
        delivery || pickup || dineIn === false ? <Start setStart={setStart} handleClick={handleClick} handleDelivery={handleDelivery} handlePickup={handlePickup} handleDineIn={handleDineIn}/> :
        || pickup ? <Pickup/> : <Start/> || dineIn ? <DineIn/> : <Start/>
      } */}

        {
          start ? <Start setStart={setStart} handleClick={handleClick} handleDelivery={handleDelivery} handlePickup={handlePickup} handleDineIn={handleDineIn}/> : delivery ? <Delivery/> : <Start/> 
        }

    </>
  )
}

// eslint-disable-next-line react/prop-types
const Start = ({handleClick,handleDelivery,handlePickup,handleDineIn,handleStart}) =>{
  return(
    <>
      <div className="popup">
            <div className="popupHeading">
                <button onClick={handleStart}> (= </button>
                <h1>START YOUR ORDER</h1>
                <RxCross1 className='exit' onClick={handleClick}/>
            </div>
            <div className="popUpBody">
                <h1>How would you like to receive your order?</h1>
                <button onClick={handleDelivery}>Delivery</button>
                <button onClick={handlePickup}>Pick up</button>
                <button onClick={handleDineIn}>Dine in</button>
            </div>
        </div>
    </>
  )
}

const Delivery = () =>{
  return(
    <>
      <h1>Delivery</h1>
    </>
  )
}

const Pickup = () =>{
  return(
    <>
      <h1>Pick up</h1>
    </>
  )
}

const DineIn = () =>{
  return(
    <>
      <h1>DineIn</h1>
    </>
  )
}

export default StartOrderPopUp;