import React, { useState } from 'react'
import "../Style/Sign.css"


// Add the icon to the library
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
    <div className='main-sign' >
      <div className='sub-main-sign' style={myStyle}>
      <div className='dynamic-text'>Welcome to Valzon....
      <br></br> </div>

      </div>
      <div className='text'>  Millions of Passion-prenueres and more than employees worldwide contribute to our mission of helping people live better, healthier lives. Join us in the journey and let your passion connect you to the world’s vibrant communities on health, wellness, fitness, and beauty. Our platform helps you unleash your entrepreneurial journey through social commerce and consumers to find what they love to support their health and wellness. Discover Valzon's history, mission, and brand’s journey of empowering entrepreneurs with exciting business opportunities for over years.
      </div>
       <div className='formm'>
          <form action='#'><h2> Registered </h2>
            <label htmlFor='name'>Enter Name</label>
            <input type='text' id='name' name='fname' value={d.name} placeholder='Enter your name' onChange={changed} /> <br></br><br></br>
            <label htmlFor='email' >Enter Email</label>
            <input type='email' id='email' name='email' value={d.email} placeholder='Enter Email ' onChange={changed} /> <br></br><br></br>
            <label htmlFor='pass' >Password</label>
            <input type='password' id='pass' name='pass' value={d.pass} placeholder='Enter password ' onChange={changed} /> <br></br><br></br>
            <button className='btn' type='submit' >Sign Up</button> <br></br>
            <button className='btn' type='reset'  >Reset</button>
          </form> 
        </div>
      </div>
      
      )
}

      export default Signup