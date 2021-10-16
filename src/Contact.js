import React, { Component } from 'react'
import './App.css';
import './w3.css';
// import { IconName } from "react-icons/io";
import { SiTwitter } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";


 export default class Contact extends Component{
     render(){
        return (
            <div className="App2"  id="contact">
              <header className="App-header2">
                {/* <img src={img} className="photof" alt="logo" /> */}
                
                               
                 <div class=""><p className="ContactT">Contact</p>               
                  <p className= "Email">nune.gabriel.gn@gmail.com</p>                  
                  <p className="icons">
                   <SiTwitter size="2rem"/>
                    <SiFacebook size="2rem"/>
                    <SiInstagram size="2rem"/>
                  </p>
                  {/* <p className = "footer"> © 2021 Gabriel Nunekpeku</p> */}
                  </div>
  
                
              
                 </header>

            
             
              
            </div>
          );
     }
 }