import React, { useContext, useState } from 'react'
import { context } from '../Component/ApiiData'
import Reuse from '../Component/Reuse';
import SliderComponent from '../Component/Slider';
import ReactPlayer from 'react-player';
import "../Style/Home.css"
import detail from "../NavComponent/Details"
import f1 from "../Component/assets/f2.png"
import f2 from "../Component/assets/f3.png"
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import ContactlessIcon from '@mui/icons-material/Contactless';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Reachform from './Reachform';
const Home = () => {
  const [scrollIndex, setScrollIndex] = useState(0);

  const scrollRight = () => {
    setScrollIndex(scrollIndex + 1);
  };
  const data = useContext(context)

  console.log("apidat", data.dat);

  const divbackstyle = {
    backgroundImage: `url(${f1})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
  const describe=[
    {
      head:"FREE DELIVERY",
      subhead:"WORLDWIDE",
      ico:<LocalShippingIcon/>
    },
    {
      head:"24/7 SUPPORT",
      subhead:"CUSTOMER SUPPORT",
      ico:<HeadsetMicIcon/>
    },
    {
      head:"PAYMENT",
      subhead:"SECURE SYSTEM",
      ico:<ContactlessIcon/>
    }, {
      head:"TRUSTED",
      subhead:"ENUINE PRODUCTS",
      ico:<EmojiEventsIcon/>
    }
  ]
  return (
    <>
    <SliderComponent/>
    <div className='four-cont-describe'>
      {describe && describe.map((dat)=>{
        return(
        <div>
        <h5>{dat.ico}</h5>
       <span>
       <h5>{dat.head}</h5>
       <p>{dat.subhead}</p>
       </span>
      </div>
      )})}
    </div>
      <h1 style={{ paddingLeft: "1%" }} >Our Popular Products</h1>
      
      <div className='cart3-after-slider-main' style={{ transform: `translateX(-${scrollIndex * 20}%)` }}>

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
        <Reachform/>

    </>


  )
}

export default Home
