import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css"
import { useState } from "react";
const Navbar=()=>{
    window.addEventListener('scroll',function(){
        const nav_Bar=document.querySelector(".nav_bar");
        nav_Bar.classList.toggle("active_nav",window.scrollY>200)
    })
    const[links_active,setlinks]=useState(false);
    return(
        
        <div className="nav_bar">
            <div className="contener">
                <div className="main">
                    
                    <div className="logo">
                        <h3>ultra profile</h3>
                    </div>
                    
                    <div className={`links ${links_active==true  ? 'links_active' : ''}`}>
                        <ul>
                            <li><NavLink  to='/'>Home</NavLink></li>
                            <li><NavLink  to='/work'>work</NavLink></li>
                            <li><NavLink  to='/portfolio'>portfolio</NavLink></li>
                            <li><NavLink  to='/resum'>resum</NavLink></li>
                            <li><NavLink  to='/apout'>apout</NavLink></li>
                            <li><NavLink to='/contact'>contact</NavLink></li>
                            
                        </ul>
                        <i class="fa-solid fa-bars" onClick={()=>setlinks(!links_active)}></i>
                    </div>
            
                </div>
            
            </div>
        </div>
    )
}
export default Navbar;
{/* <NavLink  to='/'>Home</NavLink>
<NavLink to='/contact'>contact</NavLink> */}
