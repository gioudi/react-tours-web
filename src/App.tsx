import { type FC } from 'react';
import Navbar from './components/Header/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Tours from './components/Tours/Tours';
import Contact from './components/Contact';

const App: FC = () => {
  return (
    <main className="root">
      <BrowserRouter>
        <Navbar />
        <section className="container has-background-light  is-fullhd">
          <Routes>
            <Route
              path="/"
              element={<Hero></Hero>}
            ></Route>
            <Route
              path="/tours"
              element={<Tours />}
            ></Route>
            <Route
              path="/contact"
              element={<Contact />}
            ></Route>
          </Routes>
        </section>
      </BrowserRouter>
    </main>
  );
};

export default App;
