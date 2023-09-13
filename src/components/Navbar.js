import React from 'react';
import logo from "./images/logo.jpg";



function Head() {
    return(
        <section className='head'>
            <div className='container flexSB'>
               <div className='logo'>
                  <img className="logo" src= {logo}/>
                
               </div>
               <div className='social'>
               <i class="fa-brands fa-facebook  icon" ></i>
               <i class="fa-brands fa-twitter icon" ></i>
               <i class="fa-brands fa-instagram icon"></i>
               <i class="fa-brands fa-linkedin icon"></i>
                </div>
             </div> 
        </section>
    )
    
}

export default Head;

