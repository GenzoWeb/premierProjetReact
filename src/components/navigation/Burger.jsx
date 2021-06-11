import React from 'react';

function Burger({menuOpen}) {
   let className = 'header_icon';
   if(menuOpen) {
      className += ' header_icon_anim';
   }

   return (
      <span className={className}></span>
   );
};

export default Burger;