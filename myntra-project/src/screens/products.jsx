



import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ProductScreen() {

    const [products,setProducts]=useState([])
    useEffect(()=>{

        fetchData()
    },[])

    const fetchData=async()=>{
        const response= await axios.get("https://fakestoreapi.com/products")

        if(response.status===200){
            setProducts(response.data)
        }
    }
  return (
    <div>
        <h2>List of products</h2>
        {
            products.length>0 && <>
            
            {
                products.map(each=><>
                <h4>{each.title}</h4>
                <button><Link to={`${each.id}`} >
                View Product
                </Link></button>
                
                
                </>)
            }
            </>
        }
    </div>
  )
}

export default ProductScreen