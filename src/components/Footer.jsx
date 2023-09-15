import React from 'react'
import { socialLinks } from '../data'
import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
    <footer className="footer">
      <div class="content has-text-centered">
     <SocialLinks data={socialLinks} parentClass='footer-icons' itemClass='footer-icon'> </SocialLinks> 
    <p className="copyright">
      copyright &copy; Grupo travel tours company
      <span className='ml-3' id="date">{new Date().getFullYear()}</span> all rights reserved
    </p>
      </div>
     
  </footer>
  )
}

export default Footer