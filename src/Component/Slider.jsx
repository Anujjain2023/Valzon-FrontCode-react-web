import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Vimg1 from "../Component/assets/Vimg1.jpg" 
import Vimg2 from "../Component/assets/Vimg2.jpg" 
import Vimg3 from "../Component/assets/Vimg3.jpg" 
import Vimg4 from "../Component/assets/Vimg4.jpg" 
import Vimg5 from "../Component/assets/Vimg5.jpg" 

import "../Style/Home.css"


const SliderComponent = () => {
     const [allimg] = useState([Vimg1,Vimg2,Vimg4,Vimg5])


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: -1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  

  const divStyle = {
    backgroundImage: 'url()',
    backgroundSize: 'cover', // Optional - to scale the image to cover the entire div
    backgroundRepeat: 'no-repeat', // Optional - to prevent the image from repeating
    // You can use other background properties here, like backgroundPosition, backgroundAttachment, etc.
    width: '500px', // Set the width of the div
    height: '350px', // Set the height of the div
  };


  return (
    <div>
     
      <Slider {...settings}>
        {allimg.map((image, index) => (
          <div className='dyn-div' key={index} style={divStyle} >
            <img className='dyn-img' src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;

