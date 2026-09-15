import React from 'react'
import '../Components/Css/Header.css'
import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti"
import { FaHome } from "react-icons/fa";
import {NavLink} from 'react-router-dom'

import Carousel from 'react-bootstrap/Carousel';



const Header = () => {
  return (
    <>
      <div className="header-top-outer">
        <span>Support</span>
        <span>Offer</span>
        <span>Become a Vendor</span>
        <span>Corporate Tie-ups</span>
        <span>+91 7388663365</span>
      </div>
      <div className="Header-main-outer">
        <div className="logo">
          <img src="/images/Logo.webp" alt="lodo" />
        </div>
        <div className="serch-outer">
          <input type="text" placeholder='Serrch Flower,Cake,Gifts etc' className='header-search-input' />
        <div className="search-icon"><FaSearch/></div>

        </div>

        <div className="header-btns">
          <div className="header-login-btn">
            <FaRegUserCircle size={20} />
            <span>Login/Signup</span>
          </div>
          <div className="header-cart-btn">
            <TiShoppingCart size={20} />
            <span className="header-cart-count">0</span>
          </div>
        </div>
      </div>

      <div className="header-bottom-menu">
        <ul>
          <NavLink className = {({isActive}) =>`navlinks ${ isActive ? "navActive" : ""}`} to = "/"><FaHome size={25} /></NavLink>
          <NavLink className = {({isActive}) =>`navlinks ${ isActive ? "navActive" : ""}`} to = "/shop">Shop</NavLink>
          <NavLink className = {({isActive}) =>`navlinks ${ isActive ? "navActive" : ""}`} to = "/flowers">Flowers</NavLink>
          <NavLink className = {({isActive}) =>`navlinks ${ isActive ? "navActive" : ""}`} to = "/gallery">Gallery</NavLink>
          <NavLink className = {({isActive}) =>`navlinks ${ isActive ? "navActive" : ""}`} to = "/about">About</NavLink>
          <NavLink className = {({isActive}) =>`navlinks ${ isActive ? "navActive" : ""}`} to = "/contact">Contact</NavLink>
        </ul>
      </div>
      
    </>
  )
}

export default Header