
import React, { useRef, useEffect } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    const height = navRef.current.offsetHeight;
    document.documentElement.style.setProperty('--navbar-height-dyn', `${height}px`);
  }, []);
  return (    
   <nav ref={navRef}>
    <div className="nav-wrapper">
      <Link to="/" className="main-title">
      <img src="public/icons/favicon/android-chrome-512x512.png" alt="WG logo" className="logo"/>
      <h1 className="title black-ops">Wojciech Górecki</h1>
      </Link>
      <ul>
        <li><Link to="/about-me">About Me</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><a href="https://github.com/WojteGK" target='blank'><i className="fab fa-github"> GitHub</i></a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar