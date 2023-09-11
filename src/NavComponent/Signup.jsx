import React, { useState } from 'react'
import "../Style/Sign.css"



const Signup = () => {
  const [d, setD] = useState({})
  const changed = (e) => {
    e.target.value()
  }

  const signup = () => {

  }
  const login = () => {

  }
  const myStyle= {
    backgroundImage:
    "url('https://c1.wallpaperflare.com/preview/289/911/627/operator-asia-pea-flowers-agriculture.jpg')",
           height:'100vh',
           
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat'
  }

  return (
    <div className='main-signn' >
      <div className='sub-main-sign' style={myStyle}>
      <div className='dynamic-text'>Welcome to Valzon....
      <br></br> </div>

      </div>
      <div className='text'>  Millions of Passion-prenueres and more than employees worldwide contribute to our mission of helping people live better, healthier lives. Join us in the journey and let your passion connect you to the world’s vibrant communities on health, wellness, fitness, and beauty. Our platform helps you unleash your entrepreneurial journey through social commerce and consumers to find what they love to support their health and wellness. Discover Valzon's history, mission, and brand’s journey of empowering entrepreneurs with exciting business opportunities for over years.
      </div>
       <div className='formm'>
       <span>Don't have an account? </span>
       <span className='become-customer'>Become a customer?</span><br/><br/>
          <form action='#'><h2> Login </h2>

            <label htmlFor='name'>LogID/Email</label>
            <input className='inp-log-form' type='text' id='name' name='fname' value={d.name} placeholder='Enter your Id/Email' onChange={changed} /> <br></br><br></br>

            <label htmlFor='pass' >Password</label>
            <input className='inp-log-form' type='password' id='pass' name='pass' value={d.pass} placeholder='Enter password ' onChange={changed} /> <br></br><br></br>

            <input type="checkbox" id="Remember"   />
            <label for="Remember"> Remember me</label>    
            <span for="forgot" className='become-customer'>Forgot Password ? </span> <br/>   

            <button className='btn' type='submit' >Sign Up</button> 
            <button className='btn' type='reset'  >Reset</button>
          </form> 
        </div>
      </div>
      
      )
}

      export default Signup