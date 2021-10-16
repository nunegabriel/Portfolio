import React from 'react';
import img from './myles.png';
import './App.css';


const Graphic2 = props =>{
    return(
        <div className="card text-center">
            <div classNAme="overflow">
            <img src={img} className="Myles" alt="logo" />
            </div>
            {/* <div className= "card-body text-dark">
                <h4 className= "card-title">WEB PROJECTS</h4>
                <p className = "card-text text-secondary">
                  you can veiw some of my renders from here
                </p>
                <a href = "#" className="btn btn-outline-success">view</a>
            </div> */}
            <div className= "card-body text-dark">
                {/* <h4 className= "card-title">WEB PROJECTS</h4> */}
                <p className = "card-text text-secondary">
                  {/* you can veiw some of my renders from here */}
                </p>
                {/* <a href = "#" className="btn btn-outline-success">view</a> */}
            </div>
        </div>
    );
}

export default Graphic2;