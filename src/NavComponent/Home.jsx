import React, { useContext, useState } from 'react'
import { context } from '../Component/ApiiData'
import Reuse from '../Component/Reuse';
import SliderComponent from '../Component/Slider';
import SliderComponent2 from '../Component/Slide2';
import ReactPlayer from 'react-player';
import "../Style/Home.css"

import detail from "../NavComponent/Details"
const Home = () => {
  const data = useContext(context)

  console.log("apidat", data.dat);

  
  return (
    <div >
      <div className='slide-main'>
        <div className='slide-sub1'><SliderComponent /></div>
        <div className='slide-sub2'> <SliderComponent2 /></div>
      </div>
      <div className='dynamic-text'>Welcome To Valzon....
        <br></br> </div>
      <div className='run-text-p'>Have a Nice Day.. </div>


      <div className='cart3-after-slider-main'>

         { detail && detail.map ((i)=>{
            return(
              <div className='cart3-after-slider-sub1'>
         
            <div className='cart3-img-k-phle'>
              <img src={i.imgsrc} alt='err' width="100%" />
              </div>
              <div className='cart3-text'>{i.heading}
               <br/>
               <br/>
              <span className='shop-now'>Shop Now</span>
              </div>
           

        </div>
            )
         })}

      </div>

      <h1 style={{paddingLeft:"1%"}} >Popular Products      </h1>
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
         


      <div className='media-main'>
        <div className='media1'>
        <ReactPlayer  className="youtubee" width="100%" url={"https://youtu.be/P2Gn5dHbMGs"} controls={true} /></div>
        <div className='media1'><ReactPlayer  className="youtubee" width="100%" url={"https://youtu.be/NefQmx44K04"} controls={true} /></div>
        <div className='media1'><ReactPlayer className="youtubee" width="100%" url={"https://youtu.be/ZZaYdvXj2cI"} controls={true} /></div>


      </div>
    
      
    </div>


  )
}

export default Home
