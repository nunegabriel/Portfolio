import React, { Component } from 'react';
import {Navbar, Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import ScrollspyNav from "react-scrollspy-nav";
import { scrollDispatch  } from 'organism-react-scroll-nav';
import { Link, animateScroll as scroll } from "react-scroll";
// import { Link } from "react-scroll";

// import Contact from './Contact';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import Works from './Works';
import Home from './home';
import Contact from './Contact';


export default class NavbarComp extends Component{
    render(){
        return (
            
            
            <div className = "Navb">
             <Navbar bg="" expand="lg">

                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                <Nav.Link>
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}> Home

                    </Link>
                </Nav.Link>
                <Nav.Link>
                <Link
                    activeClass="active"
                    to="work"
                    className="nav-links"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}> Works

                    </Link>
                </Nav.Link>
                <Nav.Link>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}> Contact

                    </Link>
                </Nav.Link>
                
            </Nav>
            </Navbar.Collapse>
        
        </Navbar> 





                                </div>
                      





        );
    }
}


