import React from "react"
// import '/home/gabriel/reachout/src/NavBar.scss'
import scrollTo from "gatsby-plugin-smoothscroll"
import ScrollspyNav from "react-scrollspy-nav";
import { scrollDispatch  } from 'organism-react-scroll-nav';
import { Link, animateScroll as scroll } from "react-scroll";
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            Portfolio.
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#work")}>Work</button>
            <button onClick={() => scrollTo("#about")}>About</button>
            <button onClick={() => scrollTo("#contact")}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
