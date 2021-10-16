import React, {Component} from 'react';
import Graphic from './GraphicUI';
import Graphic2 from './GraphicUI2';
import Graphic3 from './GraphicUI3';

class Graphics extends Component{
    constructor(props){
        super(props);
        this.state= {}
    
    }
    render(){
        return(
               
                    <div className = "container-fluid d-flex justify-content-center">
                        <div className="row">
                            <div className="col-md-4"><Graphic2/>
                            </div>
                            <div className="col-md-4"><Graphic/>
                            </div>
                            <div className="col-md-4"><Graphic3/>
                            </div>
                            {/* <div className="col-md-4"><Graphic/>
                            </div>
                            <div className="col-md-4"><Graphic3/>
                            </div>
                            <div className="col-md-4"><Graphic3/>
                            </div> */}
                        </div>

                                               
                        
                    </div>

                    
               

        );
    }
}

export default Graphics;
