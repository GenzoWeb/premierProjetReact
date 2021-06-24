import React from 'react';
import Language from '../competences/language';

function languages() {
   return (
      <div className="bloc_comp">
         <h2>Compétences</h2>
         <div className="languages">
            <Language title="HTML / CSS" level="4"/>
            <Language title="JAVASCRIPT" level="3"/>
            <Language title="PHP" level="3"/>
            <Language title="REACT" level="3"/>
            <Language title="WORDPRESS" level="2"/>
            <Language title="SYMFONY" level="1"/>
         </div>
      </div>
   );
}

export default languages;