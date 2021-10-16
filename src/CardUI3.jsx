import React from 'react';
import img from './img3.png';
import './App.css';


const Card3 = props =>{
    return(
        <div className="card text-center">
            <div classNAme="overflow">
            <img src={img} className="photof3" alt="logo" />
            </div>
            <div className= "card-body text-dark">
                <h4 className= "card-title">Graphic Design</h4>
                <p className = "card-text text-secondary">
                  View some of my graphic design works here
                </p>
                <a href = "#" className="btn btn-outline-success">View Works</a>
            </div>

        </div>
    );
}

export default Card3;