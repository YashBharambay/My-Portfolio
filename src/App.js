import React from "react"
import './App.css';
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  const [dark, setdark] = React.useState(false)

  return (
    <div className={dark && "dark-mode"}>
      <Navbar handleCallback={() =>  setdark(!dark)} dark={dark}/>
      <About/>
      <Projects/>
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
