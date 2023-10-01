import logo from '../images/logo.png';
import {pageLinks } from '../data';
import PageLinks from './PagesLinks';

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src={logo}  alt={logo}/>
        </a>

        <a role="button"
         href={() => false} 
         className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end ">
          <PageLinks data={pageLinks} itemClass='navbar-item'/>
          <div className="navbar-dropdown">
          <PageLinks data={pageLinks} itemClass='navbar-item'/>
          </div>
        </div>
      </div>
    </nav>


  )
}

export default Navbar