import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {

const x = useSelector(state => state.simple.x)


  return (
    <div style={{backgroundColor : 'black' ,height : "100px"}}>



      <h2 style={{color:"white"}}>this is a navbar</h2>  
      <h2 style={{color:"white"}}> {x}</h2>  







    </div>
  )
}

export default Navbar