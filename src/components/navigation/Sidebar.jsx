import React, { useState } from 'react';
import NavMenu from './NavMenu'
import Burger from './Burger'


function Sidebar() {
   const [menuShow, setMenuShow] = useState(false);
   const toggleMenu = () => setMenuShow((s) => !s);

   return (
      <div className="sidebar">
         <div className="head">
            <img className="img_sidebar" src="/images/developpeur.jpg" alt="développeur sur son bureau" />
            <h2>Julien Desmoniere</h2>
         </div>
         <div className="header_burger" onClick={() =>{toggleMenu()}}>
            <Burger menuOpen={menuShow}></Burger>
         </div>
         <NavMenu menuOpen={menuShow}></NavMenu>
         <div className="icons_sidebar">
            <div className="fa_sidebar">
               <a href="https://github.com/GenzoWeb"><i className="fab fa-github"></i></a>
               <a href="https://www.facebook.com/julien.desmoniere"><i className="fab fa-facebook"></i></a>
            </div>
            <p>JD</p>
         </div>
      </div>
   );
};

export default Sidebar;