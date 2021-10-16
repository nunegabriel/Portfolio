import logo from './logo.svg';
import './App.css';
import Home from './home.js';
import Work from './Works';
import Gallery from './Gallery';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './NavbarComp';
// import Navy from './Navy';
// import NavBar from './NavBar';
import Navbar from './Nav';
import Contact from './Contact';
import WebGallery from './WebGallery';
import GraphGallery from './GraphGallery';



function App() {
  return (
    <div>
       <Navbar />
       <Home />
       <WebGallery/>
       
       {/* <GraphGallery/> */}
        <Gallery/>
       <Contact />
       {/* <Footer /> */}
    </div>
  );
}

export default App;
