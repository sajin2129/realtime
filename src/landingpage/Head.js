import React, { useState } from 'react';
import "./head.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay, } from '@fortawesome/free-brands-svg-icons';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faDesktop } from '@fortawesome/free-solid-svg-icons'; 


const Head = () => {
  const [menu, setMenu] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMen = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="head" data-aos="fade-up" data-aos-duration="2000">
      <div className="logo">
        <Link to='/' style={{ textDecoration: "none" }}>
          <img src="../assets/reltime-logo-1.png" alt="reltime" />
        </Link>
      </div>



      <Link to={'/msgform'} style={{ textDecoration: "none", color: "white" }}>
      <div className="msgbar">
          <div className="fixedicop"> <FontAwesomeIcon icon={faEnvelope}  className='fixedicon'/></div>
             CONTACT US
        </div>
      </Link>
 
     

        <Link to={"/contactfoot"} style={{ textDecoration: "none", color: "white" }}> 
        <div className="demobar">
          <div className="fixedicop"> <FontAwesomeIcon icon={faDesktop} className='fixedicon'/></div>
             BOOK A DEMO
        </div>
        </Link>


       





      <div className="hamburing">
        <div className={menu ? "nav" : "none"}>
          <div className="menunav">
            <ul>
              <Link to={'/aboutus'} style={{ textDecoration: "none", color: "white" }}><li>About</li></Link>
              <li className='mediaoption'>Media
                <ul>
                  <Link to={'/media'}   style={{ textDecoration: "none", color: "white" }}>  <li>RELTIME IN MEDIA</li></Link>
                 <Link to={'/presspage'} style={{ textDecoration: "none", color: "white" }}>   <li>PRESS REALEASES</li></Link>
                
                </ul>
              </li>
              <Link to={"/usecase"} style={{ textDecoration: "none", color: "white" }}><li>Use cases</li></Link>
              <Link to={"/service"} style={{ textDecoration: "none", color: "white" }}>  <li>Services</li></Link>
            </ul>

            <Link to={"/contactfoot"} style={{ textDecoration: "none", color: "white" }}><button>Developer</button></Link>
            <Link to={"/contactfoot"} style={{ textDecoration: "none", color: "white" }}>  <button>Book A Demo</button></Link>

            
          </div>
          <div className="navicon">
            <a href="https://www.example.com">            <FontAwesomeIcon icon={faApple} />
            </a>
            <a href="https://www.example.com">            <FontAwesomeIcon icon={faGooglePlay} />
            
            </a>
          </div>
          <div className="hamburgerbar" onClick={toggleMenu}>X</div>
        </div>
        <div className={menu ? "none" : "menu-x"} onClick={toggleMenu}>
          <img src="../assets/menu-icon.png" alt="menu" />
        </div>
      </div>

      <div className="hamburgermedia">
        {!isOpen ?
          (<div className={`menu-icon`} onClick={toggleMen}> <FontAwesomeIcon icon={faBars} /></div>) : (
            <div className="menuna">

              < FontAwesomeIcon className='exit' icon={faTimes} onClick={toggleMen} />
              <ul style={{ paddingLeft: "10px" }}>
              <Link to={'/aboutus'} style={{ textDecoration: "none", color: "white" }}><li>About</li></Link>

                <li className='mediaoption'>Media
                <ul>
                <Link to={'/media'}   style={{ textDecoration: "none", color: "white" }}>  <li>RELTIME IN MEDIA</li></Link>
                 <Link to={'/presspage'} style={{ textDecoration: "none", color: "white" }}>   <li>PRESS REALEASES</li></Link>
                </ul>
                </li>
                <Link to={"/usecase"} style={{ textDecoration: "none", color: "white" }}><li>Use cases</li></Link>
              <Link to={"/service"} style={{ textDecoration: "none", color: "white" }}>  <li>Services</li></Link>
              </ul>
              <Link to={"/contactfoot"} style={{ textDecoration: "none", color: "white" }}><button>Developer</button></Link>
            <Link to={"/contactfoot"} style={{ textDecoration: "none", color: "white" }}>  <button>Book A Demo</button></Link>
              <div className="navicon">
                <a href="https://www.example.com">            <FontAwesomeIcon icon={faApple} />
                </a>
                <a href="https://www.example.com">            <FontAwesomeIcon icon={faGooglePlay} />
                </a>
              </div>
            </div>)}

      </div>
    </div>
  );
}

export default Head;
