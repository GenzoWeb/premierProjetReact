import React from 'react';
import {NavLink} from 'react-router-dom';

const NavMenu = ({menuOpen}) => {
   let className = 'menu';
   if(menuOpen) {
      className += ' menu_show';
   }

   return (
      <div className={className}>
         <ul>
            <li>
               <NavLink exact to="/" activeClassName="active"><i className="fas fa-home"></i> Accueil</NavLink>
            </li>
            <li>
               <NavLink exact to="/Portfolio" activeClassName="active"><i className="far fa-images"></i> Portfolio</NavLink>
            </li>
            <li>
               <NavLink exact to="/Compétences" activeClassName="active"><i className="fas fa-dumbbell"></i> Compétences</NavLink>
            </li>
            <li>
               <NavLink exact to="/Contact" activeClassName="active"><i className="far fa-address-book"></i> Contact</NavLink>
            </li>
         </ul>
      </div>
   );
};

export default NavMenu;