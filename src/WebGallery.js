import React, { Component } from 'react';
import '/home/gabriel/reachout/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import WebPhoto from './WebPhotos';

//  export default class import Work from './Works'{
 
//  Work extends Component{
 export default class WebGallery extends Component{
     render(){
         return(
            <div className="App3" id="work">
                 <p className = "WorksHeader"><br></br>WEB DESIGN</p>
                    <WebPhoto/>
                    
               
            </div>
            
         )
     }
 }

