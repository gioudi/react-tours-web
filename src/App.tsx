import React, { FC } from "react";
import Navbar from './components/Header/Navbar';
import Hero from "./components/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tours from "./components/Tours/Tours";

const App: FC = () => {
    return (
      <main className="root">
      <BrowserRouter>
        <Navbar/>
         <Routes>
          <Route path="/" element={<Hero></Hero>}></Route>
          <Route path="/tours" element={<Tours/>}></Route>
         </Routes>
      </BrowserRouter>
      </main>
    );
  };

export default App;



  
