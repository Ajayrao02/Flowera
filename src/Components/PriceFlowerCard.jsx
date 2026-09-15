
import React from 'react'
import './CSS/PriceFlowerCard.css'
import { TiShoppingCart } from "react-icons/ti";

const PriceFlowerCard = ({ p, imgUrl, price, discountPrice, discount, review, rating }) => {
  return (
    <>

      <div className="price-flower-card">
        <div className="price-flower-card-img">
          <img src={imgUrl} alt="Flower" />
          <p className="flower-discount">{discount}%</p>
        </div>
        <div className="flower-name">
          <p>{p}</p>
        </div> 
        <div className="price-flower-card-price">
          <div className="price-flower-card-price-text">
            <p className="price">₹{price}</p>
            <p className="discount-price">₹{discountPrice}</p>
          </div>

          <TiShoppingCart fontSize={28}  />


        </div>  
        <div className="flower-review-rating">
          
          <p className="review">{review} reviews</p>
          <p className="rating">{rating} ⭐</p>
        </div>
      </div>






    </>
  )
}

export default PriceFlowerCard