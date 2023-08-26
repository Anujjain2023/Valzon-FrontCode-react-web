import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Style/Nav.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Vlogo from "./Component/assets/Vlogo.jpeg"
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate()

  const NavCon = () => {
    navigate("/contact")
  }
  const NavBrand = () => {
    navigate("/brand")
  }
  const NavHome = () => {
    navigate("/")
  }
  const NavCompany = () => {
    navigate("/company")
  }
  const NavNews = () => {
    navigate("/news")
  }
  const NavGalary = () => {
    navigate("/galary")
  }

  const NavSign = () => {
    navigate("/sign")
  }
  const clickkk = () => {

  }

  const toggleClick = () => {
    setToggle(!toggle)
    console.log("gfyry6ry");
  }
  const login = () => {
    navigate("/login")
  }

  return (
    <div>
      <div className='up-main'>
        <div className='left-nav'>

          <span>About Us|</span>
          <span>Gallery|</span>
          <span>Order Tracking</span>
        </div>
        <div>Valzon Pvt.Ltd.</div>
        <div>Need help? Call Us <span className='number'>9111777280</span> </div>
      </div><hr></hr>

      <div className='Second-Line-main-nav'>
        <div className='left-nav-img'> <img className='imgg' src={Vlogo} width={"100%"} />

        </div>
        <div className='out-inp'>
          <div className='inp'>
            <input type='text' placeholder="    Search" /> <SearchIcon />
            <button type='submit'>Search</button>
          </div>
          <div className='right-icon-user'>
            <span className='icon-user' > <PersonIcon /> <span>User</span> </span>
            <span className='icon-user'> <ShoppingCartIcon />  Cart</span>
            <span className='icon-user'>  <AccountCircleIcon />  Account</span>
          </div>
        </div>

      </div>


      <div className='main'>
        <h3 className='h2-cate'>All-Categories
        <ul onClick={clickkk} className='h2-cate-sub'>
        <li>KITCHEN & HOUSE-CLEANING</li>
        <li>KITCHEN CARE</li>
        <li>PERSONAL CARE</li>
        <li>POOJA NEED</li>
        <li>WELLNESS PRODUCT</li>
        </ul>
        </h3>
        <div className={toggle ? " nav-main  mobile-togle" : "nav-main"} >
          <span className='home-nav' onClick={NavHome}>Home</span>
          <span className='brand-nav' onClick={NavBrand}>Brand
            <div className='brand-sub-nav'>
              <ul onClick={clickkk}>
                <li>HEALTH SUPPLEMENTS</li>
                <li>HOME CARE</li>
                <li>COLOUR COSMETICS</li>
                <li>NATURAL PERSONAL CARE</li>
              </ul>
            </div>

          </span>
          <span className='company-nav' onClick={NavCompany}>Company</span>
          <span className='news-nav' onClick={NavNews}>News</span>
          <span className='galary-nav' onClick={NavGalary}>Galary
            <div className='brand-sub-nav'>
              <ul >
                <li>Photos</li>
                <li> Videos</li>
              </ul>
            </div>
          </span>
          <span className='contact-nav' onClick={NavCon}>Contact</span>
          <span className='sign-nav' onClick={NavSign}>Account
            <div className='brand-sub-nav'>
              <ul >
                <li onClick={login} >LogIn</li>
                <li> SignUp</li>
              </ul>
            </div>

          </span>


          <div className='mobile-togle' onClick={toggleClick}>|||</div>
        </div>
        <h4 ><span className='h2-whatsapp' style={{ display:"flex", flexDirection:"row", alignItems: "center" }}><WhatsAppIcon /> 9111777280</span>
        <span className='whats-app'>WhatsApp Support</span> 

        </h4>
      </div>
    </div>
  )
}

export default Navbar
