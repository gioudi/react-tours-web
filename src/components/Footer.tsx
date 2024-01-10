import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import React from 'react';

const Footer = (): JSX.Element => {
  return (
    <footer className="footer container">
      <div className="columns">
        {/* Information Columns */}
        <div className="column is-one-third">
          <div className="content">
            <h3 className="title is-4">Nosotros</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className="column is-one-third">
          <div className="content">
            <h3 className="title is-4">Servicios</h3>
            <ul>
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
            </ul>
          </div>
        </div>

        <div className="column is-one-third">
          <div className="content">
            <h3 className="title is-4">Contacto</h3>
            <p>Correo: info@example.com</p>
            <p>Telefono: (123) 456-7890</p>
          </div>
        </div>
      </div>

      <div className="content has-text-centered">
        <div className="social-icons">
          <a href="#" className="icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>

      <div className="content has-text-centered">
        <p>
          <strong>Tours runDev</strong> &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
