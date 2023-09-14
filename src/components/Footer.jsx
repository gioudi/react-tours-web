import React from 'react'
import { footerLinks, socialLinks } from '../data'
import PageLinks from './PagesLinks';
import SocialLinks from './SocialLinks'
const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks data={footerLinks} parentClass='footer-links' itemClass='footer-link'></PageLinks>
      <SocialLinks data={socialLinks} parentClass='footer-icons' itemClass='footer-icon'> </SocialLinks>
    <p className="copyright">
      copyright &copy; Backroads travel tours company
      <span id="date">{new Date().getFullYear()}</span> all rights reserved
    </p>
  </footer>
  )
}

export default Footer