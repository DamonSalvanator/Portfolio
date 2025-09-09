import { useState } from "react";
import LandingPage from "./Hero section/LandingPage";
import About from "./About/About.jsx";
import Skills from "./Skills/Skills.jsx";
import Projects from "./Projects/Projects.jsx";
import Fotter from "./Footer/Fotter.jsx";
import Contact from "./Contact/Contact.jsx";


 import { ToastContainer } from 'react-toastify'
function App() {
  return (
    <>
        <ToastContainer />
      <LandingPage id='LandingPage' />
      <About id='About' />
      <Skills id='Skills' />
      <Projects id='Projects' />
      <Contact id='Contact'/>
      <Fotter></Fotter>
    </>
  );
}

export default App;




