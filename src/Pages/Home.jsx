import React from 'react'
import './CSS/Home.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Carousel from 'react-bootstrap/Carousel';
import CategoryCard from '../Components/CategoryCard'
import PriceFlowerCard from '../Components/PriceFlowerCard'
import Testimonial from '../Components/Testimonial'
import {
  FaHandHoldingHeart,
  FaTruck,
  FaMapMarkedAlt,
  FaMoon ,
  FaShieldAlt
} from "react-icons/fa";

import { FaUserCircle } from "react-icons/fa";
import "./CSS/Testimonials.css";
const Home = () => {

  let categories = [
    {
      id: 1, text: "CAKES", imgUrl: "/images/c1.webp"
    },
    {
      id: 2, text: "COOKIES", imgUrl: "/images/c2.webp"
    },
    {
      id: 3, text: "CUPCAKES", imgUrl: "/images/c3.webp"
    },
    {
      id: 4, text: "BROWNIES", imgUrl: "/images/c4.webp"
    },
    {
      id: 5, text: "MACAROONS", imgUrl: "/images/c5.webp"
    },
    {
      id: 6, text: "DONUTS", imgUrl: "/images/c7.webp"
    }
  ]


  let products = [
    {
      id: 1, p: "Drew Drops", imgUrl: "/images/f1.webp" , price: 1000 , discountPrice: 999 , discount: 10 , review: 65327 , rating: 4.5
    }, 
    {
      id: 2, p: "Flowers in vase", imgUrl: "/images/f2.webp" , price: 1400 , discountPrice: 499 , discount: 10 , review: 8427 , rating: 4.5
    },
    {
      id: 3, p: "Flowers in vase", imgUrl: "/images/f3.webp" , price: 11000 , discountPrice: 959 , discount: 10 , review: 84237 , rating: 4.5
    },
    {
      id: 4, p: "Flowers in vase", imgUrl: "/images/f4.webp" , price: 1200 , discountPrice: 1000 , discount: 10 , review: 48427 , rating: 4.5
    },
    {
      id: 5, p: "Flowers in vase", imgUrl: "/images/f5.webp" , price: 31000 , discountPrice: 1999 , discount: 10 , review: 6427 , rating: 4.5
    },
    {
      id: 6, p: "Flowers in vase", imgUrl: "/images/f6.webp" , price: 13000 , discountPrice: 2999 , discount: 10 , review: 5627 , rating: 4.5
    }
  ]
    

  const testimonials = [
        {
          name: "Anirudh Avani",
          title: "Excellent Prompt Service India",
          review:
            "Excellent prompt service. Delicious cake Great value for money. Delivered on time",
        },
        {
          name: "Varsha Yadav",
          title: "Flowers Were Delivered On Time, Ordered At India",
          review:
            "Thank you Flowera for the fresh flowers delivery in India",
        },
        {
          name: "Uma",
          title: "Thank You Flowera For Fresh Roses And Orchids India",
          review:
            "Best Florist in India online & offline, I have ordered a combo of cake and flower for my sister?s birthday. They delivered the bouquet on time.",
        }
      ];




  return (
    <>
      <Header/>

      {/*hero section*/}
      <div className="slider-outer">
        <Carousel>
      <Carousel.Item>
        <img className="slider-img" src="/images/s1.webp" alt="Slider 1" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img className="slider-img" src="/images/s2.webp" alt="Slider 2" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img className="slider-img" src="/images/s3.webp" alt="Slider 3" />
        
      </Carousel.Item>
    </Carousel>
      </div>


      {/*category section*/}
      <div className="catergory-card-home-outer">
        {categories.slice(0, 6).map((item) => (<CategoryCard key={item.id} text={item.text} imgUrl={item.imgUrl} />))}
        

      </div>



        <div className="delivery-banner-outer">

          <div className="delivery-flower-outer">
          <div>
            <img src="/images/deleviery.webp" alt="" />
          </div>
          <div>
            <img src="/images/flower.webp" alt="" />
          </div>
        </div>
        <div className="why-choose-us-outer">
          <img src="/images/whychooseUs.webp" alt="" />
        </div>


      </div>

      <h1 className='Best-Flower-Bouquet'>Best Flower Bouquet</h1>

      <div className="price-flower-card-home-outer">
        {products.slice(0, 6).map((item) => (<PriceFlowerCard key={item.id} p={item.p} imgUrl={item.imgUrl} price={item.price} discountPrice={item.discountPrice} discount={item.discount} review={item.review} rating={item.rating}/>))}
      </div>


      <div className="item-products-outer">
        
          <div className="item-products-img">
            <img src="/images/cf1.webp" alt="" />
          </div>
          <div className="item-products-img">
            <img src="/images/cf2.webp" alt="" />
          </div>
          <div className="item-products-img">
            <img src="/images/cf3.webp" alt="" />
          </div>
          <div className="item-products-img">
            <img src="/images/cf4.webp" alt="" />
          </div>
          
        

      </div>

      <h1 className='Best-Flower-Bouquet'>Best Selling Combos</h1>


      <div className="price-flower-card-home-outer">
        {products.slice(0, 6).map((item) => (<PriceFlowerCard key={item.id} p={item.p} imgUrl={item.imgUrl} price={item.price} discountPrice={item.discountPrice} discount={item.discount} review={item.review} rating={item.rating}/>))}
      </div>



      <div className="text-center">
        <div className="inner-text-center">
          <div className="inner-text-center-left">
            <FaHandHoldingHeart />
          </div>
          <div className="inner-text-center-right">
            <h1>Safety And Hygiene</h1>
            <p>Our Bakery & Florist shop takes complete control over safety and hydgeine. We also follow proper covid safety guidelines.</p>
          </div>
        </div>
        <div className="inner-text-center">
          <div className="inner-text-center-left">
            <FaTruck />
          </div>
          <div className="inner-text-center-right">
            <h1>Express 3 Hour Delivery</h1>
            <p>Get Flowers,cakes, gifts,chocolate same-day delivery in 3 hours. We guarantee ontime delivery.</p>
          </div>
        </div>
        <div className="inner-text-center">
          <div className="inner-text-center-left">
            <FaMapMarkedAlt />
          </div>
          <div className="inner-text-center-right">
            <h1>Delivery In 500+ Cities</h1>
            <p>We bet, you will have the best experience of flowers & cakes in more the 600 cities in India.</p>
          </div>
        </div>
         <div className="inner-text-center">
          <div className="inner-text-center-left">
            <FaMoon />
          </div>
          <div className="inner-text-center-right">
            <h1>Midnight Delivery</h1>
            <p>Surprise your loved one with our reliable midnight flower delivery services.</p>
          </div>
        </div>
      </div>


      <h1 className='Best-Flower-Bouquet'>Best Selling Combos</h1>


      <div className="price-flower-card-home-outer">
        {products.slice(0, 6).map((item) => (<PriceFlowerCard key={item.id} p={item.p} imgUrl={item.imgUrl} price={item.price} discountPrice={item.discountPrice} discount={item.discount} review={item.review} rating={item.rating}/>))}
      </div>



      <Testimonial  />

      


      






      <Footer/>
    </>
  )
}

export default Home