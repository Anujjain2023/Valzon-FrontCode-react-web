import React from 'react'

const Login = () => {
  return (
    <div>
    <br></br>
    <div>
      <form className='formm' action='#'>
        <label htmlFor='user-name' >UserName : </label>
        <input type='text' id='user-name' /><br></br>
        <label htmlFor='password' >Password : </label>
        <input type='password' id='password' /><br></br>
        <button type='submit' >LogIn</button>
      </form>
    </div>
    </div>
  )
}

export default Login