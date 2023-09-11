import React from 'react'
import abStr1 from "../Component/assets/abStr.jpg" 
import ab1 from "../Component/assets/ab1.webp"
import "../Style/News.css"
const News = () => {
  return (
    <div className='news-main'>
      <div className='news-fi-div'>
       <img src={ab1} />
       <center>
        <h2 className='welcome-text'>Welcome to the world of Valzon!</h2>
        <p className='welcome-text'>Helping People live better, healthier lives</p>
       </center>
      </div> 
      <center className='white-back-valzon'>
        <h2>This is Valzon</h2>
        </center>
        <p className='aftergreen-p'>
        Millions of Passion-prenueres and more than employees worldwide contribute to our mission of helping people live better, healthier lives. Join us in the journey and let your passion connect you to the world’s vibrant communities on health, wellness, fitness, and beauty. Our platform helps you unleash your entrepreneurial journey through social commerce and consumers to find what they love to support their health and wellness. Discover Amway’s history, mission, and brand’s journey of empowering entrepreneurs with exciting business opportunities for over years.
        </p>
      
      <h3 className='aftergreen-p' >Our Strength</h3>
      <p className='aftergreen-p'>Valzon has been working towards enhancing the spirit of entrepreneurship in the country. Entrepreneurship is at the heart of everything we do. We have a global network of over one million Amway Direct Selling (ADS) Partners that includes from India, of which 60% are women. We are consistently striving to create a robust ecosystem that provides an avenue for our partners to own and operate their own businesses around their passions for fitness, healthy living, cooking, and beauty.</p>
      <div className='news-sec-div'>
       <div> <img src={abStr1} /></div>
       <h2>Our Strength</h2>
      </div>

    </div>
  )
}

export default News