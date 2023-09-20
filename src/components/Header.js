import logo from "./images/logo.jpg";
import React from 'react';
import "./Header.css";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"

import { useState } from "react";

function Header () {
  const navigate = useNavigate()
  const [click, setClick] = useState(false)
  
  return (
    <>
      <Navbar/>
      <header>
        <nav className="flexSB">
          <ul className={click ? " mobile-nav " : "flexSB"} onClick={()=>setClick(false)}></ul>
            <li><Link to = "/">Home</Link> </li>
            <li><Link to = "/About">About</Link></li>
            <li><Link to = "/Contact">Contact</Link></li>
            <li> <Link to = "/Pricing">Pricing</Link></li>
            <li> <Link to = "/Journal">Journal</Link></li>
          <ul/>  
          <div className="start">
            <button onClick={()=>navigate("Signup")}>Signup</button>
          </div>
        </nav>
      </header>
    </>
  )

}  

export default Header;