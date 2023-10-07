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
      <div> You Have items in the cart</div>

      <div className='cart-main'>

        <CustomScroll>
          <div className='item-main'>

            <div className='item-img'>
              <img src='' />
            </div>
            
            <h3>Name</h3>
            <div className='Product'>
              <AddIcon />
              <input type='text' id="quantity" />
              <RemoveIcon />
            </div>

            <div className='price'>
              2000/- 
            </div>

            <div className='remove'>Remove Item</div>

          </div>
        </CustomScroll>
      </div>
      <div className='pay'>
        <span >Total Payment</span> =
        <span>20000/-</span> <br /> <br />

        <span className='pay-btn'>Pay Now</span>
      </div>

    </>
  )
}

export default Cart
