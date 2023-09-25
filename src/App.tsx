import React, { FC } from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About'
import Services from './components/Services'
import Tours from './components/Tours'

const App: FC = () => {
    return (
      <main className="root">
      <>
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About> 
        <Services></Services> 
        <Tours></Tours>
        <Footer></Footer> 
      </>
      </main>
    );
  };

export default App;



  
