import React from 'react'
import { BrowserRouter } from "react-router-dom";
import SideBar from './component/SideBar';
import './style.css'
import About from './component/About';
import Expericence from './component/Expericence';
import Project from './component/Project';
import Contact from './component/Contact';
import ScrollToTop from "react-scroll-to-top";

export default function App() {
  return (
      <BrowserRouter>
    <div className='app'>
        <SideBar/>
        <div className='allsection'>
          <About/>  
          <Expericence/>
          <Project/>
          <Contact/>
        </div>
    </div>
    <ScrollToTop smooth />
     </BrowserRouter>

      

  )
}
