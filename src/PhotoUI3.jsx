import React from 'react';
import img from './nerh.jpg';
import './App.css';


const Photo3 = props =>{
    return(
        <div className="card text-center">
            <div classNAme="overflow">
            <img src={img} className="D" alt="logo" />
            </div>
            <div className= "card-body text-dark">
                {/* <h4 className= "card-title">3D WORKS</h4> */}
                <p className = "card-text text-secondary">
                  {/* you can veiw some of my renders from here */}
                </p>
                {/* <a href = "#" className="btn btn-outline-success">Go anywhere</a> */}
            </div>

        </div>
    );
}

export default Photo3;