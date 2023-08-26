import React from 'react'
import "../Style/Footer.css"
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import CopyrightIcon from '@mui/icons-material/Copyright';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import logo from "../Component/assets/Vlogo.jpeg"
const Footer = () => {
    return (
    <>
        <div className='footer-main'>

            <div className='first-li'>
                <div >
                    <ul> <h3>CATEGORIES</h3>

                        <li>Kitchen Care Products </li>
                        <li>Wellness Product </li>
                        <li>Cosmectics </li>
                        <li>Zebronics Products </li>
                        <li>Sport </li>
                        <li>Personal Care</li>
                        <h3>Call Us</h3>
                        <h4 style={{ display:"flex", flexDirection:"row", alignItems: "center" }}><PermPhoneMsgIcon /> 9111777280 </h4>
                        <h4 style={{ display:"flex", flexDirection:"row", alignItems: "center" }}><AccessAlarmIcon /> Hours:10:00 - 07:00, Mon - Fri</h4>
                        <h4 style={{ display:"flex", flexDirection:"row", alignItems: "center" }}><AttachEmailIcon />  valzonindia@gmail.com</h4>

                    </ul>
                </div>

                <div >

                    <ul> <h3>MY ACCOUNT</h3>

                        <li>Log in </li>
                        <li>Register </li>

                    </ul>
                </div>
                <div>
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
                <div>
                    <br></br>
                    <div><img src={logo} /> </div>
                    <div>
                        <h3 className="map-h2">Come Visit Us At Our Campus</h3>
                        <div><AddLocationAltIcon /> eSavari
                            4th Floor 18, Gulab Bagh near <br />Metro Mall, Dewas Naka, Gulab Bagh <br />Colony, Indore, Madhya Pradesh 452010</div>
                        <br />
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.925524266447!2d75.90517729999999!3d22.768145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d4c04378541%3A0x49a84815f15340e7!2seSavari!5e0!3m2!1sen!2sin!4v1691584643872!5m2!1sen!2sin" ></iframe>

                    </div>
                </div>

            </div>
            <center style={{ display:"flex", flexDirection:"row",justifyContent:"center", alignItems: "center" }} className='copyright'><CopyrightIcon /> Abhi 2023</center>
            <br></br>
            
            </div>

        </>
    )
}

export default Footer