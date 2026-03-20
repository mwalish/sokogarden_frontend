import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const GetProducts = () => {
  // intitailize oue hooks
  const[loading,setLoading]=useState("")
  const[error,setError]=useState("")
  const[products,setProducts]=useState([])

  const navigate=useNavigate()

  // variable to store images
  const image_url="http://mwalish.alwaysdata.net/static/images/"

  // function  to fetch data from the api
  const fetchproducts = async() =>{
    setLoading("please wait as we retrive your products")
    try {
         const response=await axios.get("http://mwalish.alwaysdata.net/api/getproductsdetails")

    setProducts(response.data)
    setLoading("")

    } catch (error) {
      setLoading("")
      setError(error.message)
      
    }
    // call our api
    const response=await axios.get("http://mwalish.alwaysdata.net/api/getproductsdetails")

    // show the data on the  browser
    console.log("the response is",response)

    setProducts(response.data)
    setLoading("")
  }
  // endof function where we call useeffect
  useEffect(()=>{
    fetchproducts()
  },[])

  return (
    <div className='row'>
        <h1>available Products</h1>
        <p className='text-warning'>{loading}</p>
        <p className='text-danger'>{error}</p>

        {/* calling .map to iletarate  through items */}


      {products.map((product)=>(
      
   

        <div className='col-md-3 justify-content-center' >

          <div className='card shadow mt-2'>
            <img src={image_url+product.product_photo} alt="cake" className='product_img mt-3'  />

            <div className='card-body'>
              <h5 className='text-success'>{product.product_name}</h5>
              <p className='text-secondary'>{product.product_description} </p>
              <p text-warning><product className="product_cost"></product></p>
              <input type="button" className='btn btn-secondary w-100' value="purchase now" onClick={()=>navigate("/mpesa",{state:{product}})}/>

            </div>

          </div>


        </div>
           ))}
    </div>
  )
}

export default GetProducts