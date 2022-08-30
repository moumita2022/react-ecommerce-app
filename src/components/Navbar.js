import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MyContext } from '../ContextAPI/context'

export default function Navbar() {
  const{state}=useContext(MyContext)
  return (
<nav style={{display:"flex"}}>
  
      <ul style={{display:"flex",listStyleType:"none"}}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/profile">Profile</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink style={{display:"flex",marginTop:"7px"}}to="/cart">Cart <sup style={{display:"inline-block",width:"15px",height:"15px",color:"white",backgroundColor:"grey",fontSize:"12px",padding:"5px",borderRadius:"7px",marginLeft:"15px", textAlign:"center",}}>{state.cart.length}</sup></NavLink></li>
        <li><NavLink to="/contactus">Contact Us</NavLink></li>
     
      
      <div> 
      <NavLink to="/">
<img
src="https://www.creativefabrica.com/wp-content/uploads/2021/06/29/Gradient-ecommerce-logo-Online-shop-Graphics-14011621-1.png"
width="200"
alt=""
/>
</NavLink> 

    {/* <NavLink to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNkB0SuGwQnE__5AwaIxN0DFm6d6Uh_1nBmA&usqp=CAU"  width="100" alt="" /></NavLink> */}
   </div> 
   </ul> 

 </nav>
  )
}
