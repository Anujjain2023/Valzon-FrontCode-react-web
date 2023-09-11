import React from 'react'
import "../Style/Footer.css"
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import CopyrightIcon from '@mui/icons-material/Copyright';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import logo from "../Component/assets/Vlogo.jpeg"

import imgg from "../Component/assets/yellow-back1.jpg"

const Footer = () => {
    const background={
      backgroundImage: `url(${imgg})`,
      backgroundSize: 'cover',// Optional - to scale the image to cover the entire div
      backgroundRepeat: 'no-repeat', // Optional - to prevent the image from repeating
      // You can use other background properties here, like backgroundPosition, backgroundAttachment, etc.
      width: `94%`,
      height: `300px`,
      borderRadius: `3%`,
 
  }
    return (
    <>
      
    <div className='back-img' style={background} >
    <div className='sec-back-img-head-text'>People, Products and Planet <div style={{ color: "rgb(22, 249, 116)" }}>Our CSR</div></div>
    <div>Valzon  has chosen to prefix the selfless 'OUR'</div>
    <div className='email-responce-k-uper'>when partnering for social initiatives Our People, Our Products & Our Planet.</div>

    <div className='email'>
     <input type='email' id='submit-email' placeholder='Your email address' />
     <button type='submit'className='btnnn'  > Subscribe </button>
    </div>
 </div>


        <div className='footer-main'>

            <div className='first-li'>
                <div className='li-blok-using-media-qu'>
                    <ul> <h3>CATEGORIES</h3>

                        <li>Kitchen Care Products </li>
                        <li>Wellness Product </li>
                        <li>Cosmectics </li>
                        <li>Zebronics Products </li>
                        <li>Sport </li>
                        <li>Personal Care</li>
                        <h3>Call Us</h3>
                        <h5 style={{ display:"flex", flexDirection:"row", alignItems: "center" }}><PermPhoneMsgIcon /> 9111777280 </h5>
                        <h5 style={{ display:"flex", flexDirection:"row", alignItems: "center" }}><AccessAlarmIcon /> Hours:10:00 - 07:00, Mon - Fri</h5>
                        <h5 style={{ display:"flex", flexDirection:"row", alignItems: "center" }}><AttachEmailIcon />  valzonindia@gmail.com</h5>

                    </ul>
                
                 </div>


               <div className='li-blok-using-media-qu'>
                    <ul> <h3>MY ACCOUNT</h3>

                        <li>Log in </li>
                        <li>Register </li>

                    </ul>


                    <ul> <h3>POLICY</h3>

                        <li>Compliance Documents </li>
                        <li>Product Return Policy </li>
                        <li>Product List </li>
                        <li> List Of Directors </li>
                        <li>Complaint Procedure </li>
                        <li>Trademark Application </li>
                        <li>Report </li>
                        <li>Information </li>
                    </ul>
                </div>
                
                    <br></br>
            <div className='li-blok-using-media-qu'>
  
                    <div className='logo'><img src={logo} /> </div>
                   <div className='li-blok-using-media-qu2'>

                   
                        <h3 className="map-h2">Come Visit Us At Our Campus</h3>
                        <div><AddLocationAltIcon /> eSavari
                            4th Floor 18, Gulab Bagh near <br />Metro Mall, Dewas Naka, Gulab Bagh <br />Colony, Indore, Madhya Pradesh 452010</div>
                        <br />
                        </div>
                        </div>
                        <iframe className='mapp' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.925524266447!2d75.90517729999999!3d22.768145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d4c04378541%3A0x49a84815f15340e7!2seSavari!5e0!3m2!1sen!2sin!4v1691584643872!5m2!1sen!2sin" ></iframe>

                   
                

            </div>
            <center style={{ display:"flex", flexDirection:"row",justifyContent:"center", alignItems: "center" }} className='copyright'><CopyrightIcon /> Abhi 2023</center>
            <br></br>
            
            </div>

        </>
    )
}

export default Footer