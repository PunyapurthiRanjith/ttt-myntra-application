


import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function CategoryScreen() {
  return (
    <div>
        <h2>CategoryScreen</h2>
        <button className='p-1 m-2'><Link to={"electronics"} >Electronics</Link></button>
        <button className='p-1 m-2'><Link to={"jewellery"} >jewellery</Link></button>
        <Outlet/>
    </div>
  )
}

export default CategoryScreen