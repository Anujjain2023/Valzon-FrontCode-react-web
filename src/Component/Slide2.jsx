import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import VimgS1 from "../Component/assets/VimgS1.jpg"
import VimgS2 from "../Component/assets/VimgS2.jpg" 
import VimgS3 from "../Component/assets/VimgS3.jpg" 
import VimgS4 from "../Component/assets/VimgS4.jpg" 

import "../Style/Home.css"


const SliderComponent2 = () => {
     const [allSimg] = useState([VimgS1,VimgS2,VimgS4,VimgS3])


  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
     
      <Slider {...setting}>
        {allSimg.map((image, index) => (
          <div className='dyn-div' key={index} style={divStyle} >
            <img className='dyn-img' src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent2;

