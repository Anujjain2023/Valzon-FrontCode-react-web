import React from 'react'
import "../Style/Footer.css"
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import CopyrightIcon from '@mui/icons-material/Copyright';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import imgg from "../Component/assets/yellow-back1.jpg"

const Footer = () => {
    const background = {
        backgroundImage: `url(${imgg})`,
        backgroundSize: 'cover',// Optional - to scale the image to cover the entire div
        backgroundRepeat: 'no-repeat', // Optional - to prevent the image from repeating
        // You can use other background properties here, like backgroundPosition, backgroundAttachment, etc.
        width: `94%`,
        height: `300px`,
        borderRadius: `3%`,

    }
     // <div className='back-img' style={background} >
            //     <div className='sec-back-img-head-text'>People, Products and Planet <div style={{ color: "rgb(22, 249, 116)" }}>Our CSR</div></div>
            //     <div>Valzon  has chosen to prefix the selfless 'OUR'</div>
            //     <div className='email-responce-k-uper'>when partnering for social initiatives Our People, Our Products & Our Planet.</div>

            //     <div className='email'>
            //         <input type='email' id='submit-email' placeholder='Your email address' />
            //         <button type='submit' className='btnnn'  > Subscribe </button>
            //     </div>
            // </div>
    const facebookLogoURL = 'https://th.bing.com/th?id=OIP.zkkdY1CFVdOkJgqKkYX2bQHaFL&w=298&h=209&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'; // Replace with the actual URL to your Facebook logo
    const facebookPageURL = 'https://www.facebook.com/your-facebook-page';
    return (
        <>

           


            <div className='footer-main'>

                <div className='first-li'>
                    <div className='li-blok-using-media-qu'>
                        <ul> <h4>CATEGORIES</h4>

                            <li>Kitchen Care Products </li>
                            <li>Wellness Product </li>
                            <li>House Cleaning Proceducts</li>
                            <li>Pooja Needs</li>
                            <li>Personal Care</li>
                            <br/>
                            <h4>Call Us</h4>
                            <li style={{ display: "flex", flexDirection: "row", alignItems: "center", width:"110%"}}><PermPhoneMsgIcon /> 9111777280 </li><br/>
                            <li style={{ display: "flex", flexDirection: "row", alignItems: "center", width:"110%" }}><AccessAlarmIcon /> Hours:10:00 - 07:00, Mon - Fri</li><br/>
                            <li style={{ display: "flex", flexDirection: "row", alignItems: "center", width:"110%" }}><AttachEmailIcon />  valzonindia@gmail.com</li>

                        </ul>




                        <ul> <h4>MY ACCOUNT</h4>

                            <li>Log in </li>
                            <li>Register </li>
                            <br/>
                            <h4>POLICY</h4>

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
                        <div>
                            <div className='li-blok-using-media-qu2'>


                                <h4 className="map-h2">Come Visit Us At Our Campus</h4>
                                <div><AddLocationAltIcon /> ESavari
                                    4th Floor 18, Gulab Bagh near <br />Metro Mall, Dewas Naka, Gulab Bagh <br />Colony, Indore, Madhya Pradesh 452010</div>
                                <br />
                              
                                <div className='social'>
                                    
                                    <span><FacebookIcon/>  </span>
                                   
                                    <span><InstagramIcon/>  </span>
                                    <span><LinkedInIcon/>  </span>
                                  
                                </div>
                            </div>
                        </div>
                        <div className='mapping'>
                            <iframe className='mapp' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.925524266447!2d75.90517729999999!3d22.768145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d4c04378541%3A0x49a84815f15340e7!2seSavari!5e0!3m2!1sen!2sin!4v1691584643872!5m2!1sen!2sin" ></iframe>
                        </div>
                    </div>


                </div>
                <center style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }} className='copyright'><CopyrightIcon />Valzon2023</center>
                <br></br>

            </div>

        </>
    )
}

export default Footer