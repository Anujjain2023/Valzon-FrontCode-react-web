import React from 'react'
import "../Style/Reuse.css"
const Reuse = (props) => {
  console.log(props.price);
  return (
    <div className='re-main'>
    
      <div className='img-ke-phle'><img src={props.image}  width="100%" /> </div>
      <h2 className='h2-des'>{props.category}</h2>
      <button className='btn-reuse' >Price: RS{props.price}/-</button>
      <button className='btn-reuse' >{}</button>
    </div>
  )
}

export default Reuse
