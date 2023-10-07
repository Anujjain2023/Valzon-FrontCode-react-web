import React, { useContext, useState } from 'react'
import { context } from '../Component/ApiiData'
import Reuse from '../Component/Reuse';
import SliderComponent from '../Component/Slider';
import ReactPlayer from 'react-player';
import "../Style/Home.css"
import hhimg from "../Component/assets/i4.jpg"
import detail from "../NavComponent/Details"
import f1 from "../Component/assets/f2.png"
import f2 from "../Component/assets/f3.png"
const Home = () => {
  const data = useContext(context)

  console.log("apidat", data.dat);

  const divbackstyle = {
    backgroundImage: `url(${hhimg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',


  }
  return (
    <>
    <SliderComponent/>
      <h1 style={{ paddingLeft: "1%" }} >Our Popular Products      </h1>
      <div className='cart3-after-slider-main'>

        {detail && detail.map((i) => {
          return (
            <div className='cart3-after-slider-sub1'>

              <div className='cart3-img-k-phle'>
                <img src={i.imgsrc} alt='err' width="100%" />
              </div>
              <div className='cart3-text'>{i.heading}
                <br />
                <span className='shop-now'>Shop Now</span>
              </div>


            </div>
          )
        })}

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



      <div className='media-main'>
        <div className='media1'>
          <ReactPlayer className="youtubee" width="100%" url={"https://youtu.be/P2Gn5dHbMGs"} controls={true} /></div>
        <div className='media1'><ReactPlayer className="youtubee" width="100%" url={"https://youtu.be/NefQmx44K04"} controls={true} /></div>
        <div className='media1'><ReactPlayer className="youtubee" width="100%" url={"https://youtu.be/ZZaYdvXj2cI"} controls={true} /></div>


      </div>

    </>


  )
}

export default Home
