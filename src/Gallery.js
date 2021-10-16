import React, { Component } from 'react';
import '/home/gabriel/reachout/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Photo from './Photos';

//  export default class import Work from './Works'{
 
//  Work extends Component{
 export default class Gallery extends Component{
     render(){
         return(
            <div className="App3" id="work">
                 <p className = "WorksHeader"><br></br>3D</p>
                    <Photo/>
                    
               
            </div>
            
         )
     }
 }

