import React from 'react';
import logo from '../images/logo.png';
import {pageLinks, socialLinks} from '../data';
import PageLinks from './PagesLinks';
import SocialLinks from './SocialLinks';

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
      <SocialLinks data={socialLinks} parentClass='nav-icons' itemClass='nav-icon'> </SocialLinks>
    </div>
   </nav>

  )
}

export default Navbar