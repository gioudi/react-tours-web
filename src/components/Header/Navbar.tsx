/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState,  useEffect } from 'react';
import logo from '../../images/logo.png';
import { pageLinks } from '../../data';
import { Page } from '../../interfaces';
import { Pages } from '../../types';
import ToggleButton from '../ToggleButton';


const Navbar = () => {
    const [active,setActive] = useState(false);
    const [pages, setPages] = useState<Pages>([]);

    useEffect(()=> {
      setPages(pageLinks)
    },[])
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" ref={()=> {}} onClick={()=> window.location.reload()}>
      <img src={logo}  alt={logo}/>
    </a>

    <a role="button"
      onClick={()=> {
        setActive(!active)
    }}
    className={`navbar-burger burger ${active && 'is-active'}`}
     aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className={`navbar-menu ${active && 'is-active'}`}>
    <div className="navbar-start">
      { pages.map((page: Page) => {
        const {id, text, href} = page;
        return( 
        <a className="navbar-item" key={id} href={href}>
          {text}
        </a>)
      }) }
    </div> 
    <div className="navbar-end">
    <div className="navbar-item">
        <div>
        <ToggleButton/>
        </div>
      </div> 
    </div> 
  </div>
</nav>
  )
}

export default Navbar;