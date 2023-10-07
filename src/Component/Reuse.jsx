import React, { useState } from 'react'
import "../Style/Reuse.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Reuse = (props) => {
  const [cartd,Setcartd] = useState()
  console.log(props.price);
  const cartBtnClick=()=>{
     
  }
  return (
    <div className='re-main'>
    
      <div className='img-ke-phle'><img src={props.image}  width="100%" /> </div>
      <h2 className='h2-des'>{props.category}</h2>
      <div className='btn-parent'>
      <button className='btn-reuse' >Price: RS{props.price}/-</button>
      <button className='btn-reuse2' onClick={cartBtnClick} ><AddShoppingCartIcon/><span>Cart</span> </button>
      </div>
    </div>
  )
}

export default Reuse
