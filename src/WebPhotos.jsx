import React, {Component} from 'react';
import Photo7 from './PhotoUI7';
import Photo5 from './PhotoUI5';
import Photo6 from './PhotoUI6';

class WebPhotos extends Component{
    constructor(props){
        super(props);
        this.state= {}
    
    }
    render(){
        return(
               
                    <div className = "container-fluid d-flex justify-content-center">
                        <div className="row">
                            <div className="col-md-4"><Photo7/>
                            </div>
                            <div className="col-md-4"><Photo5/>
                            </div>
                            <div className="col-md-4"><Photo6/>
                            </div>
                            {/* <div className="col-md-4"><Photo/>
                            </div>
                            <div className="col-md-4"><Photo3/>
                            </div>
                            <div className="col-md-4"><Photo3/>
                            </div> */}
                        </div>

                                               
                        
                    </div>
               

        );
    }
}

export default WebPhotos;
