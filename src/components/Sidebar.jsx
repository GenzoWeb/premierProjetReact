import React from 'react';
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
   return (
      <div className="sidebar">
         <div className="menu">
            <ul>
               <li>
                  <NavLink exact to="/" activeClassName="active">Accueil</NavLink>
               </li>
               <li>
                  <NavLink exact to="/Projets" activeClassName="active">Projets</NavLink>
               </li>
               <li>
                  <NavLink exact to="/Compétences" activeClassName="active">Compétences</NavLink>
               </li>
               <li>
                  <NavLink exact to="/Contact" activeClassName="active">Contact</NavLink>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Sidebar;