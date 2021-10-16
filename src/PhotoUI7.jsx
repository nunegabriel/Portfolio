import React from 'react';
import img from './WORK.png';
import './App.css';


const Photo7 = props =>{
    return(
        <div className="card text-center">
            <div classNAme="overflow">
            <img src={img} className="webw" alt="logo" />
            </div>
            <div className= "card-body text-dark">
                <h4 className= "">Documents management system
                </h4>
                <p className = "card-text text-secondary">
                  you can veiw some of my renders from here
                </p>
                {/* <a href = "#" className="btn btn-outline-success">Go anywhere</a> */}
            </div>

        </div>
    );
}

export default Photo7;