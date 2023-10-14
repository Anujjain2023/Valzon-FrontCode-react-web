import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import "./Style/Nav.css"
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';import SearchIcon from '@mui/icons-material/Search';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Vlogo from "./Component/assets/Vlogo.png"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import grocery from "./Component/assets/k-c.png";
import pooja from "./Component/assets/pooja.png";
import pcare  from "./Component/assets/p-c.png";
import hcare from "./Component/assets/h-c.png";
import wellness from "./Component/assets/w-c.png";
import BorderOuterIcon from '@mui/icons-material/BorderOuter';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InventoryIcon from '@mui/icons-material/Inventory';
import DehazeIcon from '@mui/icons-material/Dehaze';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Navbar = () => {
  const [toggle, setToggle] = useState(true)
  const navigate = useNavigate()

  const toggleClick = ()=> {
    setToggle(!toggle)
    console.log("gfyry6ry");
  }
  const searchClick = ()=>{
    
  }
  const clickuser = () => {

  }
  const cartClickk = () => {
    navigate("/cart")
  }
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


  const userCick = () => {
    navigate("/login")
  }
  const signpage = () => {

  }

  const housecleaning = () => {
    navigate("/housecleaning")
  }
  const personalcare = () => {
    navigate("/personalcare")
  }
  const wellnessproduct = () => {
    navigate("/wellness")

  }
  const poojaneed = () => {
    navigate("/pooja")
  }
  const kitchencare = () => {
    navigate("/kitchen")

  }
  const videogalary = () => {
    navigate("/vid")
  }

 

  return (
    <>
      <div className='for-media-search'>
      <div className='up-main'>
       <div>
       <div className="toggle" onClick={toggleClick}> <DehazeIcon/></div> 
        <div className='left-nav-img'> <img className='imgg' src={Vlogo} width={"100%"} />
        </div>
        </div>
        <div className='out-inp'>
          <div className='search-box-top'>
            <SearchIcon onClick={searchClick} />
            <input type='text' placeholder="Search For Products" /> 
          </div>
          <div className='right-icon-user'>
            <span className='icon-user'>
            <PersonIcon className="large-icon" onClick={userCick} />

          <NavDropdown
              id="nav-dropdown-dark-example"
              title="User"
              menuVariant="light"
              >
              <NavDropdown.Item  href="#action/3.1">  <PersonIcon /> My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <BorderOuterIcon/> Order
              </NavDropdown.Item>
              <NavDropdown.Item><FavoriteBorderIcon/> Wishlist</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><InventoryIcon/>  Reward</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              New Customer? <span>Sign Up</span>
              </NavDropdown.Item>
            </NavDropdown>
              </span>
              <span  onClick={cartClickk} className='icon-user'> <ShoppingCartIcon className="large-icon" />  Cart</span>
           <span className='t3dots-icon'><MoreVertIcon/></span> 
          </div>
        </div>

      </div>
    
      <div className='Search-box-using-media'>
      <SearchIcon onClick={searchClick} />
      <input type='text' placeholder="Search For Products" /> 
    </div>
    </div>
    <span className={toggle?"user-ul":"user-ul-show"}>
    <li>
     <span>New Customer?  </span>
     <span style={{color:"#13ACA7"}}>   Sign UP</span>
    </li>
    <li > 
    <PersonIcon />
     <span>My Profile</span>
    </li>
    <li> 
     <BorderOuterIcon/>
     <span>Order</span>
    </li>
    <li> 
    <FavoriteBorderIcon/>
     <span>WishList</span>
    </li>
    <li> 
    <InventoryIcon/>
    <span>Reward</span>
   </li>
  </span>
      <div className='main'>
        
        <div className="nav-main" >


          <div className='nav-prd' onClick={kitchencare}>
           <div ><img src={grocery} />
          </div><span> Kitchen care </span>
          </div>

          <div className='nav-prd' onClick={housecleaning}>
          <div ><img src={hcare} />
          </div><span>Home Care</span> 
          </div>

          <div className='nav-prd' onClick={personalcare}>
          <div ><img src={pcare} />
          </div> <span>Personal Care </span>
          </div>

          <div className='nav-prd' onClick={poojaneed}>
          <div ><img src={pooja} />
           </div><span>Pooja Need</span>
          </div>

          <div className='nav-prd' onClick={wellnessproduct}>
          <div ><img src={wellness} />
          </div> <span >Wellness</span>
          </div>


        </div>
      </div>
    </>
  )
}

export default Navbar
