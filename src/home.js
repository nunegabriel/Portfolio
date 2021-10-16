import img from './img.webp';
import './App.css';
import Work from './Works';
import Contact from './Contact';

function Home() {
  return (
    <div className="App" id="home">
      <header className="App-header">
        <img src={img} className="photof" alt="logo" />
        <p className = "Gabby">
            Hi, I am Gabriel 🔥<br></br>
          <p className= "Bold"><br></br>A fullstack web developer<br></br>Graphic designer<br></br>and a 3D artist</p>
          <p className= "light">I build software,<br></br>digital products, Brands,<br></br>UI and 3D assets.</p>

        </p>
        
        <button
          className="App-link"
          href=""
          target="_blank"
          rel=""
        >
         Contact Me!
        </button>
        <br></br>
        <br></br>
        {/* <p> <Work/>
        <Contact/>
       </p>
        */}

       
       </header>
     
      
    </div>
  );
}

export default Home;
