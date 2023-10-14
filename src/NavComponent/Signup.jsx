import React, { useState } from 'react'
import "../Style/Sign.css"
import axios from 'axios'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Validation from '../Component/Validationform';

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email:'',
    phone: "",
    address :"",
    password :""
  })
  const [errors ,setEroors] = useState({})
  const changed = (e) => {
    setData({...data,[e.target.name]: e.target.value})
  }
  
  const validateForm = () => {
    let newErrors = {};

    if (!data.name) {
      newErrors.name = 'Name is required';
    }

    if (!data.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!data.password) {
      newErrors.password = 'Password is required';
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,25}$/.test(data.password)) {
      newErrors.password = 'Must contain at least one number and one uppercase, lowercase letter and one Special Character and at least 6 or more characters';
    }
    setEroors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form data is valid, you can proceed to submit or process it
      console.log('Form data submitted:', data);
      
    }
    // axios.post("http://localhost:8000/register",data)
  };
const submitdata=(e)=>{
  e.preventDefault();
  setEroors(Validation(data))
  console.log(data);
  // toast("login Succrsss")
  // axios.post("http://localhost:8000/register",data)
}

  const myStyle= {
    backgroundImage:
    "url('https://c1.wallpaperflare.com/preview/289/911/627/operator-asia-pea-flowers-agriculture.jpg')",
           height:'80vh',
           innerWidth:"50%",       
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
       <span className='become-customer'>Become a customer?</span><br/><br/>
          <form action='#' onSubmit={handleFormSubmit}>
          <h2> Self Registered </h2>

            <label htmlFor='name'>Name*</label>
            <input required className='inp-log-form' type='text' id='name' name='name' placeholder='Enter your Name' onChange={changed} autoComplete='offf' /> <br></br><br></br>
              
            <label htmlFor='email'>Email</label>
            <input className='inp-log-form' type='email' id='email' name='email'  placeholder='Enter your Id/Email' onChange={changed} /> <br></br><br></br>
            {errors.email && <p style={{color:"red"}}>{errors.email}</p>}

            <label htmlFor='phone'>Pnone*</label>
            <input className='inp-log-form' type='number' id='phone' name='phone' placeholder='Enter your Phone Numbar' onChange={changed} /> <br></br><br></br>
            {errors.phone && <p style={{color:"red"}}>{errors.phone}</p>}

            <label htmlFor='address'>Address</label>
            <textarea className='inp-log-form' type='text' id='address' name='address' placeholder='Enter your Address' onChange={changed} /> <br></br><br></br>

            <label htmlFor='password' >Password*</label>
            <input className='inp-log-form' type='password' id='password' name='password'  placeholder='Enter password ' onChange={changed} /> <br></br><br></br>
            {errors.password && <p style={{color:"red"}}>{errors.password}</p>}

            <input type="checkbox" id="Remember"   />
            <label for="Remember"> Remember</label>    
            <span for="forgot" className='become-customer'>Forgot Password ? </span> <br/>   
              <button className='btn' type='submit'>Sign Up</button> 
            <button className='btn' type='reset'  >Reset</button>
            <br></br>
            <a href="https://accounts.google.com/AddSession/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F&ec=GAlAwAE&hl=en&authuser=0&flowName=GlifWebSignIn&flowEntry=AddSession" target="_blank"><img style={{width:"25px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png" /><span>Google Account</span></a><br/>
            <a href="https://www.facebook.com/" target="_blank"><img style={{width:"25px"}} src="https://www.teahub.io/photos/full/11-115962_facebook-logo-png-transparent-background-facebook-png.png" /><span>Facebook Account</span></a>
            <br/>
            <div class="login" href="">Already have an Account? <Link to="./login"> <span>Login</span></Link></div>
          </form> 
        </div>
        <ToastContainer />
      
      </div>
      
      )
}

      export default Signup