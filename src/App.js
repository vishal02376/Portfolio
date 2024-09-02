import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/NavBar/Navbar";
import Skils from "./Components/Skils/Skils";
import Works from "./Components/Works/Works";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skils/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
