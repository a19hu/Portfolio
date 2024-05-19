import './App.css';
import Home from './Component/Pages/Home';
import About from './Component/Pages/About';
import NavbarApp from './Component/NavbarApp';
import Skill from './Component/Pages/Skill';
import Project from './Component/Pages/Project';
import { ScrollPercentage } from 'react-scroll-percentage'
import React,{useState} from 'react';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Footer from './Component/Pages/Footer';
import Contact from './Component/Pages/Contact';

function App() {
  const [show, setShow] = useState(false);
  const handlechange = (percentage, entry) => {
   if (percentage > 0.35) {
    setShow(true)
    console.log(percentage)
   }
   else{
    setShow(false)

   }
  }
  return (
    <div className="App">
      <ScrollPercentage
    // as="div"
    onChange={handlechange}
  >
   <BrowserRouter>
  <NavbarApp show={show}/>
  <Home/>
      <About/>
      <Project/>
      {/* <Skill/> */}
      <Contact/>
      <Footer/>
    </BrowserRouter> 
  </ScrollPercentage>
  
    </div>
  );
}

export default App;
