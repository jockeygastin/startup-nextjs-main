import React, { useEffect, useState } from 'react';
import "../../customNavbar.css";
 

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    
    setIsCollapsed(!isCollapsed);
    
  };

  return (
     <div id='navbar' className="fixed-top navbar p-0 absolute">
      <nav className="navbar navbar-expand-md navbar-dark container-fluid vh-50 mx-auto sticky-navbar" style={{ borderRadius: '.50rem' }}>
        <div className="container-fluid">
          <img src="./images/blog/eavetopLogo2.png" alt="Icon 3" style={{ height: '42px'}} /> 
          <a className="brand fw-boldermr-28" style={{width: '200px'}} href="#">EAVETOP INFRA</a>
          <button className="navbar-toggler m-2" type="button" onClick={handleToggle}>
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className={`${isCollapsed ? "collaps" : "collapse"} navbar-collapse`}>

            <ul className="navbar-nav mx-auto mb-2 mb-lg-0" style={{
              // backgroundImage: 'linear-gradient(to right,#DCE4C9,#FCF596)',
              // borderRadius: '.50rem'
            }}>
              {/* Navbar links and icons */}
              <li className="nav-link" style={{ marginRight: '14px', marginTop: '0px', marginLeft: '10px',}}>
              <a className="nav-link active hover:bg-[#b39359]" aria-current="page" href="/">
              HOME
            </a>
            </li>
            <br />
              
              <li className="nav-link " style={{ marginRight: '14px', marginTop: '0px', marginLeft: '10px' }}>               
                <a className="nav-link active hover:bg-[#b39359]" aria-current="page" href="/about">ABOUT</a>
              </li>
              
              <br />
              <li className="nav-link" style={{ marginRight: '14px', marginTop: '0px', marginLeft: '10px' }}>              
                <a className="nav-link active hover:bg-[#b39359]" aria-current="page" href="/blog">PROJECTS</a>
              </li>
              <br />

              <li className="nav-link " style={{ marginRight: '14px', marginTop: '0px', marginLeft: '10px' }}>      
                <a className="nav-link active hover:bg-[#b39359]" aria-current="page" href="/contact">CONTACT</a>
              </li>
              <br />
              <li className="nav-link" style={{ marginRight: '14px', marginTop: '0px', marginLeft: '10px' }}> 
                <a className="nav-link active hover:bg-[#b39359]" aria-current="page" href="/services">SERVICES</a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
