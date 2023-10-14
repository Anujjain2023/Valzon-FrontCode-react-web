import React from 'react'
import "../Style/Cart.css"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CustomScroll from 'react-custom-scroll';

const Cart = () => {
  
  return (
    <>
      <div className='back-to-shop'>
        <ArrowBackIcon />
        <span>Continue Shopping</span>
      </div>
      <hr />

      <div className='heading-shop'>Shopping Cart</div>

      <div className='cart-main'>

         <CustomScroll>
        <p className='heading-shop-p'> You Have items in the cart</p>

          <div className='item-main'>

            <div className='item-img'>
              <img src='' />
            </div>
            
            <h4>Name</h4>
            <div className='Product'>
              <AddIcon />
              <RemoveIcon />
            </div>
            <div className='quantity'>Quantity</div>
            <div className='price'>
              2000/- 
            </div>

            <div className='remove'>Remove Item</div>

          </div>
        </CustomScroll>
     
      <div className='pay'>
        <span >Total Payment</span> =
        <span>2000/-</span> <br /> <br />

        <span className='place-order'>PLACE ORDER</span>
      </div>
      </div>
    </>
  )
}

export default Cart
