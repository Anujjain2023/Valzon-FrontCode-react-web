import React, { useState } from 'react'
import "../Style/Galary.css"
import img1 from "../Component/imgRoute/Vroute.jpg"
import img2 from "../Component/imgRoute/Vroute2.jpg"
import img3 from "../Component/imgRoute/Vroute3.jpg"
import img4 from "../Component/imgRoute/Vroute4.jpg"
import img5 from "../Component/imgRoute/Vroute5.jpg"
import img6 from "../Component/imgRoute/Vroute6.jpeg"
import img7 from "../Component/imgRoute/Vroute7.jpeg"
import img8 from "../Component/imgRoute/Vroute8.jpeg"
import { Outlet } from 'react-router-dom'

const Galary = () => {

  const [data, Sdata] = useState([
    { imgsr: img1 },
    { imgsr: img2 },
    { imgsr: img3 },
    { imgsr: img4 },
    { imgsr: img5 },
    { imgsr: img6 },
    { imgsr: img7 },
    { imgsr: img8 },
  ])
  return (
    <div className='img-main'>
      {
        data && data.map((i, index) => {
          return (
            <div className='img-sub'>

              <img key={index} className='imgcon' style={{  }} src={i.imgsr} />
              
            </div>
          )
        })
      }
      <Outlet/>
    </div>
  )
}

export default Galary