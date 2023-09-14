import React from 'react'
import { footerLinks, socialLinks } from '../data'
import PageLinks from './PagesLinks'
const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks data={footerLinks} parentClass='footer-links' itemClass='footer-link'></PageLinks>
    <ul className="footer-icons">
      {socialLinks.map((link)=>{
        return(  <li key={link.id}>
          <a href={link.href} target="_blank" className="footer-icon" rel="noreferrer"
            ><i className={link.icon}></i></a>
        </li>)
      })}
    </ul>
    <p className="copyright">
      copyright &copy; Backroads travel tours company
      <span id="date">{new Date().getFullYear()}</span> all rights reserved
    </p>
  </footer>
  )
}

export default Footer