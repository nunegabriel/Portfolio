import React, { Component } from 'react'
import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink

class Navy extends Component {

render() {
  return (
    <nav>
      <ScrollLink 
        to="example-destination" 
        spy={true} 
        smooth={true} 
        duration={500} 
        className='some-class' 
        activeClass='some-active-class'
      >
        Link Text Goes Here
      </ScrollLink>       
    </nav>
  );
}
}
export default Navy;
