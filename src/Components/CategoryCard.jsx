import React from 'react'
import './Css/CategoryCard.css'





const CategoryCard = ({id, text, imgUrl}) => {

  return (
    <div className="category-card-outer">
        <div className="category-card-img"><img src={imgUrl} alt={text} /></div>
        <div className="category-card-text">{text}</div>
    </div>
  )
}

export default CategoryCard