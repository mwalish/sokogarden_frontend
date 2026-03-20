import React, { useState } from 'react'
import axios from 'axios'
const AddProducts = () => {
  const[product_name,setProductName]=useState("")
  const[product_description,setProductDescription]=useState("")
  const[product_cost,setProductCost]=useState("")
  const[product_photo,setproductphoto]=useState("")

  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")
  const image_url="http://mwalish.alwaysdata.net/static/images/"
   const submit = async (e) =>{
     e.preventDefault()

     setLoading('please wait as we upload ur details.........')
    try {
      const data = new FormData()
       data.append('product_name',product_name)
       data.append('product_description',product_description)
       data.append('product_cost',product_cost)
       data.append('product_photo',product_photo)

       // calling the api: replace '/api/signup' with your real endpoint
      const response = await axios.post("https://mwalish.alwaysdata.net/api/addproducts",data)

      setLoading("")
      setSuccess(response.data.message)

      setProductName("")
      setProductDescription("")
      setProductCost("")
      setproductphoto("")
  

      

     
      
    } catch (error) {
      setLoading("")
      setError(error.message)

      
    }
   }
  return (
    <div className='row justify-content-center mt-3'>
      <div className='card shadow col-md-6 '>
        <form onSubmit={submit}>

          <h1>upload Products</h1>
          <p className='text-warning'>{loading}</p>
          <p className='text-success'>{success}</p>
          <p className='text-danger'>{error}</p>

          <input type="text " placeholder='Enter product Name' className='form-control' required value={product_name}onChange={(e)=>setProductName(e.target.value)}/>
          <br />
          <input type="text" placeholder='Describe your products' className='form-control' requiredvalue={product_description}onChange={(e)=>setProductDescription(e.target.value)}/>
          <br />
          <input type="number" placeholder='Enter product cost' className='form-control' required   onChange={(e)=>setProductCost(e.target.value)}/>
          <br />
          <p>upload product photo</p>
          <input type="file" name="" id="" placeholder='chose file' className='form-control' accept='image/*'  onChange={(e)=>setproductphoto(e.target.files [0])}/>
          <br />
          <input type="submit"  value='upload products' className='bg-success w-100 form-control text-white'/>
          <br />
        </form>

      </div>

    </div>
  )
}

export default AddProducts