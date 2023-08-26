import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../Style/Contact.css"
import imgg from "../Component/assets/yellow-back1.jpg"
 import CustomerPic from "../Component/assets/CustomerPic.webp"
import { borderRadius } from '@mui/system'
const Contact = () => {

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
    <div >
      <div  className='cont-sub-main' >
        <div className='cont-sub1'>
          <div className='greatest-heading'>How can we help you?</div>
          <div>We provide multiple modes of contact for you to share feedback, queries and suggestions</div>
        </div>

        <div className='cont-sub1'>
          <div className='customer-head'>01. Customer Care</div>
          <div>Call us on between 10:00AM to 7:00PM from Monday to Saturday</div>
          <div className='customer-head'>03. Query System -<span style={{ color: "rgb(22, 249, 116)" }}> Ankur</span></div>
          <div>Call on 9111777280 the above "Ankur" and receive the ticket number for your complaints</div>
        </div>
        <div className='cont-sub1'>
          <div className='customer-head'>02. Support Email</div>
          <div>Write to us on valzonindia@gmail.com</div>
          <div className='customer-head'>04.Whatsapp Support</div>
          <div>Chat with us on WhatsApp number +91-9111777280 between 10:00AM to 7:00PM  from Monday to Sturday</div>
        </div>

      </div>
      <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.925524266447!2d75.90517729999999!3d22.768145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d4c04378541%3A0x49a84815f15340e7!2seSavari!5e0!3m2!1sen!2sin!4v1691584643872!5m2!1sen!2sin" ></iframe>
      
      
      
      <div className='form-main'>


        <div className='form-color-text' style={{ color: "rgb(22, 249, 116)" }}> Contact Form</div>
        <div className='form-head1' >Drop Us a Line </div>
        <div>Your email address will not be published. Required fields are marked *</div>

        <div className='form-all'>

          <div className='form-head2'>Submit Your Query</div>
          <div>Drop Us a Line. We will get back to you.</div>
           <br/>
          <div className='form1'>
           <div className='form-sub'>
            <form action=''>
              <label htmlFor='name'>Name*</label><br />
              <input type='text' id='name' placeholder='Name' required /><br />

              <label htmlFor='email'>Email*</label><br />
              <input type='email' id='email' placeholder='Email' required /><br />

              <label htmlFor='number'>Mobile No. *</label><br />
              <input type='number' id='number' placeholder='Mobile Number' required /><br />

              <label htmlFor='user'>UserId/Retail Order Number</label><br />
              <input type='text' id='user' placeholder='UserId/Retail Order Number' /><br />

              <label htmlFor='subject'>Subject</label><br />
              <input type='text' id='subject' placeholder='Subject' /><br />
              
              <label htmlFor='message'>Drop Message</label><br />
              <input type='text' id='message' placeholder='Drop Message' /><br />

              <button type='submit' className='btnn' >Submit</button>
            </form>
            </div>
           <div className='customer-pic'><img src= {CustomerPic} width="100%" /> </div>

          </div>

        </div>
      </div>

      <div className='back-img' style={background} >
         <div className='sec-back-img-head-text'>People, Products and Planet <div style={{ color: "rgb(22, 249, 116)" }}>Our CSR</div></div>
         <div>Safe Shop has chosen to prefix the selfless 'OUR'</div>
         <div className='email-responce-k-uper'>when partnering for social initiatives Our People, Our Products & Our Planet.</div>

         <div className='email'>
          <input type='email' id='submit-email' placeholder='Your email address' />
          <button type='submit'className='btnnn'  > Subscribe </button>
         </div>
      </div>

    </div>
  )
}

export default Contact
