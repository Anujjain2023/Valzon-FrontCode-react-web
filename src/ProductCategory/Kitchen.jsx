import React, { useState, useEffect,useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Style/Kitchen.css';
import images from "../NavComponent/Details"
import Reuse from '../Component/Reuse';
import { context } from '../Component/ApiiData'
const Kitchen = ({ }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = useContext(context)

  const settings = {
    infinite: true,
    speed: 2000, // Transition speed in milliseconds
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Auto slide change delay in milliseconds
    beforeChange: (current, next) => setCurrentIndex(next),
  };

  // Function to handle moving to the previous image
  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  // Function to handle moving to the next image
  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <>
    <div className="image-slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image.imgsrc} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
      <button className="prev-button" onClick={prevSlide}>
        Prev
      </button>
      <button className="next-button" onClick={nextSlide}>
        Next
      </button>
    </div>

    <div className='disp-main'>

        {data.dat && data.dat.map((i) => (
          < >
            <Reuse
              price={i.price}
              image={i.image}
              category={i.category}

            />
          </>
        )

        )}
      </div>
   </>
  );
};

export default Kitchen;
