import React, {Component} from 'react';
import Photo from './PhotoUI';
import Photo2 from './PhotoUI2';
import Photo3 from './PhotoUI3';
import Photo4 from './PhotoUI4';
import Photo5 from './PhotoUI5';
import Photo6 from './PhotoUI6';


class Photos extends Component{
    constructor(props){
        super(props);
        this.state= {}
    
    }
    render(){
        return(
               
                    <div className = "container-fluid d-flex justify-content-center">
                        <div className="row">
                            <div className="col-md-4"><Photo5/>
                            </div>
                            <div className="col-md-4"><Photo6/>
                            </div>
                            <div className="col-md-4"><Photo3/>
                            </div>
                            <div className="col-md-4"><Photo/>
                            </div>
                            <div className="col-md-4"><Photo4/>
                            </div>
                            <div className="col-md-4"><Photo2/>
                            </div>
                        </div>

                                               
                        
                    </div>
               

        );
    }
}

export default Photos;
