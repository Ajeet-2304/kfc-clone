// import React from 'react'
import {Outlet} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './css/layout.css';
import ShowModal from './components/ShowModal';
import StartOrder from './components/StartOrder';
// import StartOrderPopUp from './components/StartOrderPopUp';
// import Modal from './components/Modal';
// Modal
// {startOrder,handleClick, modalWrapper, modalContainer}
// eslint-disable-next-line react/prop-types
const Layout = ({startOrder,handleModal}) => {
  return (
    <>
        {/* <div className={startOrder ? modalWrapper : ""}></div>
        <div className={startOrder ? modalContainer : ""}>
            {
                startOrder ? <Modal handleClick={handleClick}/> : ""
            }
        </div> */}
        {/* {console.log(handleModal)} */}
        {
            startOrder ? <ShowModal handleModal={handleModal}/> : ""
        }
        
        <div className="layout" >
            
            <div className="layout-header">
                <Header/>
            </div>
            <div className="startOrder">
            <StartOrder handleModal={handleModal}/>
            </div>
            <div className="outlet">
                <Outlet/>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
        
    </>
  )
}

export default Layout