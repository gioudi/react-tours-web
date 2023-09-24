import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About'
import Services from './components/Services'
import Tours from './components/Tours'

function App() {
    return (
        <>
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
        <Services></Services>
        <Tours></Tours>
        <Footer></Footer> 
  </>
    )
}

export default App;