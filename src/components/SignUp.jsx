import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {
  //initialize the hooks
  const [username,setUsername]=useState("")
  const[email,setEmail]=useState("")
  const[phone,setPhone]=useState("")
  const[password,setPassword]=useState("")

  //initialize other hooks like loading,success and error
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")

  //function

  const submit = async (e) => {
    e.preventDefault()

    setLoading('please wait.........')
    
    try {
      const data = new FormData()

      data.append('username', username)
      data.append('email', email)
      data.append('phone', phone)
      data.append('password', password)

      // calling the api: replace '/api/signup' with your real endpoint
      const response = await axios.post("https://mwalish.alwaysdata.net/api/signup",data)

      setLoading("")
      setSuccess(response.data.message)

      // reset your form
      setUsername("")
      setEmail("")
      setPassword("")
      setPhone("")

    } catch (error) {
      setLoading("")
      setError(error.message)
    
 
    }
  }


  return (
    <div className='row justify-content-center mt-3'>
      <div className='card shadow col-md-6'>
        <h1>Sign UP</h1>
        <form action="" onSubmit={submit}>
          {username}
          
          <p className='text-warning'>{loading}</p>
          <p className='text-success'>{success}</p>
          <p className='text-danger'>{error}</p>

  


        <input type="text" placeholder='enter username' className='form-control'required value={username}onChange={(e)=>setUsername(e.target.value)}/>
        <br />
        
        
        <input type="password"  placeholder='enter password' className='form-control'required value={password}onChange={(e)=>setPassword(e.target.value)}/>

        <br />
        


        <input type="phone"  placeholder='enter phone' className='form-control'required  value={phone}onChange={(e)=>setPhone(e.target.value)}/>
        <br />
        {phone}

        <input type="email" placeholder='enter email' className='form-control'required value={email}onChange={(e)=>setEmail(e.target.value)}/>
        <br />
        <input type="submit"  value='SignUp' className='bg-success w-100 form-control text-white'/>
        <br />
        <p>Already have an account?<Link to='/signin'>SignIn</Link></p>

        </form>


      </div>
      




    </div>
  )
}

export default SignUp