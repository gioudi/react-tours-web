import React, { type FC } from 'react'
import Navbar from './components/Header/Navbar'
import Hero from './components/Hero'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Tours from './components/Tours/Tours'

const App: FC = () => {
  return (
      <main className="root">
      <BrowserRouter>
        <Navbar/>
        <section className="container">
        <Routes>
          <Route path="/" element={<Hero></Hero>}></Route>
          <Route path="/tours" element={<Tours/>}></Route>
         </Routes>
        </section>
      </BrowserRouter>
      </main>
  )
}

export default App
