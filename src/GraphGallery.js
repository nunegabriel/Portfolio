import React, { Component } from 'react';
import '/home/gabriel/reachout/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Graphic from './Graphics';

//  export default class import Work from './Works'{
 
//  Work extends Component{
 export default class GraphGallery extends Component{
     render(){
         return(
            <div className="App3" id="work">
                 <p className = "WorksHeader"><br></br>GRAPHIC DESIGN</p>
                    <Graphic/>
                    
               
            </div>
            
         )
     }
 }

