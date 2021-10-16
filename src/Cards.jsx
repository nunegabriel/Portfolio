import React, {Component} from 'react';
import Card from './CardUI';
import Card2 from './CardUI2';
import Card3 from './CardUI3';

class Cards extends Component{
    constructor(props){
        super(props);
        this.state= {}
    
    }
    render(){
        return(
               
                    <div className = "container-fluid d-flex justify-content-center">
                        <div className="row">
                            <div className="col-md-4"><Card2/>
                            </div>
                            <div className="col-md-4"><Card/>
                            </div>
                            <div className="col-md-4"><Card3/>
                            </div>
                            
                        </div>

                                               
                        
                    </div>
               

        );
    }
}

export default Cards;
