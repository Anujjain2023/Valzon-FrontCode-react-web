import React, { useContext, useState } from 'react'
import "../Style/Reuse.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MyContext from '../Context/ParentContext';

const Reuse = (props) => {
 const  myContext =  useContext(MyContext)
  const [cartData,SetCartData] = useState()
  console.log(props.price);
  const cartBtnClick=()=>{
      myContext.updateCart(props)
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
