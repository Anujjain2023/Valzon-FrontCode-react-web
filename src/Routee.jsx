import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import Home from './NavComponent/Home'
import Contact from './NavComponent/Contact'
import Product from './NavComponent/Product'
import Brand from './NavComponent/Brand'
import Company from './NavComponent/Company'
import Galary from './NavComponent/Galary'
import News from './NavComponent/News'
import Signup from './NavComponent/Signup'
import Login from './NavComponent/Login'
import Personalcare from './ProductCategory/Personalcare'
import Kitchen from './ProductCategory/Kitchen'
import HouseCleaning from './ProductCategory/HouseCleaning'
import Pooja from './ProductCategory/Pooja'
import Welness from './ProductCategory/Welness'
import Video from './NavComponent/Video'
import Cart from './NavComponent/Cart'

const Routee = () => {
  return (
    <div>
     <Routes>
       <Route path='/' element = {<Home/>} />
       <Route path='contact' element = {<Contact/>} />
       <Route path='/brand' element = {<Brand/>} />
       <Route path="/product" element = {<Product/>} />
       <Route path="/company" element = {<Company/>} />
       <Route path="/galary" element = {<Galary/>}/> 
       <Route path='/vid' element = {<Video/>} />
       <Route path="/news" element = {<News/>} />
       <Route path="/sign/" element = {<Signup/>} >

       <Route path='login' element = {<Login/>} />
       </Route>
       
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/personalcare' element = {<Personalcare/>} />
       <Route path='/kitchen' element = {<Kitchen/>} />
       <Route path='/housecleaning' element = {<HouseCleaning/>} />
       <Route path='/pooja' element = {<Pooja/>} />
       <Route path='/wellness' element = {<Welness/>} />
       
     </Routes>
    </div>
  )
}

export default Routee
