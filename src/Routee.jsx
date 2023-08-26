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
const Routee = () => {
  return (
    <div>
     <Routes>
       <Route path='/' element = {<Home/>} />
       <Route path='contact' element = {<Contact/>} />
       <Route path='brand' element = {<Brand/>} />
       <Route path="product" element = {<Product/>} />
       <Route path="company" element = {<Company/>} />
       <Route path="galary" element = {<Galary/>} />
       <Route path="news" element = {<News/>} />
       <Route path="sign" element = {<Signup/>} />
       <Route path='login' element = {<Login/>} />
     </Routes>
    </div>
  )
}

export default Routee
