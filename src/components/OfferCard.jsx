// import React from 'react'
import "../css/OfferCard.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const OfferCard = ({ img, title, desc }) => {
    const handleApplyOfferBtn = () =>{
        
    }
    return (
        <>
            <div className="offerCard">
                <div className="offerCard-img">
                    <img src={img} alt="img" />
                </div>
                <div className="offerCard-desc">
                    <span className="title">{title}</span>
                    <span className="desc">{desc}</span>
                    <div className="offerCard-buttons">
                        <Link to={'/'} style={{ color: "#555555" }}>
                            View Details
                        </Link>
                        <button onClick={handleApplyOfferBtn}>Apply Offer</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OfferCard;
