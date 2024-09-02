// import React from 'react'
import {Children} from "react";
import "../css/StartOrderPopUp.css";
import { RxCross1 } from "react-icons/rx";
// import { createPortal } from "react-dom";
import ShowModal from "./ShowModal";
// eslint-disable-next-line react/prop-types
const Modal = ({handleModal,children}) => {
    // const [showModal, setShowModal] = useState(false);
    // const [closeModal, setCloseModal] = useState(false);

    const mainModel = (
        <ShowModal closeModal={handleModal}>
            <div className="popup">
                <div className="popupHeading">
                    <button> (= </button>
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
        </ShowModal>
    );

    return(
        <>
            {handleModal && mainModel}
            <div className="modal-wrapper"></div>
            <div className="modal-container">{children}</div>
            
        </>,
        document.querySelector("#modal")
    );
};

// eslint-disable-next-line react/prop-types
// const Start = ({handleClick,handleDelivery,handlePickup,handleDineIn,handleStart}) =>{
//   return(
//     <>
//       <div className="popup">
//             <div className="popupHeading">
//                 <button onClick={handleStart}> (= </button>
//                 <h1>START YOUR ORDER</h1>
//                 <RxCross1 className='exit' onClick={handleClick}/>
//             </div>
//             <div className="popUpBody">
//                 <h1>How would you like to receive your order?</h1>
//                 <button onClick={handleDelivery}>Delivery</button>
//                 <button onClick={handlePickup}>Pick up</button>
//                 <button onClick={handleDineIn}>Dine in</button>
//             </div>
//         </div>
//     </>
//   )
// }

// const Delivery = () =>{
//   return(
//     <>
//       <h1>Delivery</h1>
//     </>
//   )
// }

// const Pickup = () =>{
//   return(
//     <>
//       <h1>Pick up</h1>
//     </>
//   )
// }

// const DineIn = () =>{
//   return(
//     <>
//       <h1>DineIn</h1>
//     </>
//   )
// }

export default Modal;
