import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';
export const context = createContext()


const ApiiData = (props) => {
    const [dat , setData] = useState(
      []
    )
   useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
       
        // console.log(response.data)
        setData(response.data)
      })
      .catch(error => {
       
        console.error('Error fetching data:', error);
      });
  
   },[])
  return (

    <div>
      <context.Provider value={{dat,setData}}>
        {props.children}
      </context.Provider>
    </div>
  )
}

export default ApiiData
