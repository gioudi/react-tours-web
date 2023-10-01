import React, { FC, Fragment, useEffect, useState } from "react";
import { createApi } from "unsplash-js";

import TourCard from "./TourCard";
import Title from "./Title";


const api = createApi({
  accessKey: `${process.env.REACT_APP_ACCESS_KEY}`
});


const Tours: FC = () => {
  const [data, setResponse] = useState(null);
  useEffect(() => {
    api.search
      .getPhotos({ query: "trips", orientation: "landscape" })
      .then(result => {
        setResponse(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>Try again later!</div>
      </div>
    );
  } else {
    return (
      <div className="section">
        <Title title={'Featured'} subTitle={'tours'}></Title>
        <ul className="columnUl">
          {data.response.results.map(photo => (
            <li key={photo.id} className="li">
              <TourCard payload={photo} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Tours;


/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import logo from '../../images/logo.png';
const Header = () => {
    const [active,setActive] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <img src={logo} alt={logo}/>
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
  
    <div id="navbarBasicExample"  className={`navbar-menu burger ${active && 'is-active'}`} >
      <div className="navbar-start">
        <a className="navbar-item">
          Home
        </a>
  
        <a className="navbar-item">
          Documentation
        </a>
  
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">
            More
          </a>
  
          <div className="navbar-dropdown">
            <a className="navbar-item">
              About
            </a>
            <a className="navbar-item">
              Jobs
            </a>
            <a className="navbar-item">
              Contact
            </a>
            <a className="navbar-item">
              Report an issue
            </a>
          </div>
        </div>
      </div>
  
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a className="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>

  )
}

export default Header