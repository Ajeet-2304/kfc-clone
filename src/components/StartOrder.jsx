/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
// import { useState } from 'react';
import '../css/StartOrder.css';
// import StartOrderPopUp from './StartOrderPopUp';

// eslint-disable-next-line react/prop-types
const StartOrder = ({handleModal}) => {
  // const [show, setShow] = useState(false);
  return (
    <>
        <div className="startOrder">
            <span>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</span>
            <button onClick={handleModal}>Start Order</button>
        </div>
    </>
  )
}

export default StartOrder