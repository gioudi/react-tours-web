import React, { FC } from "react";
import Navbar from './components/Header/Navbar';
import Hero from "./components/Hero";

const App: FC = () => {
    return (
      <main className="root">
      <>
        <Navbar/>
        <section className="container is-widescreen">
          <Hero/>
        </section>
      </>
      </main>
    );
  };

export default App;



  
