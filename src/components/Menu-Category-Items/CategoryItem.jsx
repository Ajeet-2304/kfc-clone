// import React from 'react'
import '../../css/categoryItem.css';
import cartImg from '../../assets/Icon_Add_to_Cart.svg';
import { useState } from 'react';
import ShowModal from '../ShowModal';
import NonVeg from '../../assets/Non_veg_dot_Icon.d975d1f9.svg';
import Veg from '../../assets/Veg_dot_Icon.d1a3902d.svg';
// eslint-disable-next-line react/prop-types
const CategoryItem = ({ img, title, category, price, desc, handleModal }) => {
  
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(handleModal);
  }
  console.log(category);
  return (
    <>
      {modal ? <ShowModal handleModal={handleModal} /> : " "}
      <div className="categoryItem" >
        <div className="img">
          <img src={img} alt={title} />
        </div>
        <div className="desc">
          <div className="title">
            <h2>{title}</h2>
          </div>
          
          <div className="category">
            {category == "Non veg" ? <img src={NonVeg} alt="category" /> : <img src={Veg} alt="category" />}
            <span>{category}</span>
          </div>
          <div className="price">
            <h2>₹{price}</h2>
          </div>
          <div className="description">
            <span>{desc}</span>
          </div>
          <div className="button">
            <button onClick={handleClick}>Add to cart <img src={cartImg} alt="cart-img" /></button>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default CategoryItem;