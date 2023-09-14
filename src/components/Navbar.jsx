import React from 'react'
import logo from '../images/logo.svg'
import {pageLinks, socialLinks} from '../data'
import PageLinks from './PagesLinks'

const Navbar = () => {
  return (

    <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} className="nav-logo" alt="backroads" />
        <button type="button" className="nav-toggle" id="nav-toggle">
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <PageLinks data={pageLinks} parentClass='nav-links' itemClass='nav-link'/>
      <ul className="nav-icons">
    { socialLinks.map((link)=>{
      return (
        <li key={link.id}>
        <a href={link.href} target="_blank" className="nav-icon" rel="noreferrer"
          ><i className={link.icon}></i></a>
      </li>
      )
    })
    }
      </ul>
    </div>
   </nav>

  )
}

export default Navbar