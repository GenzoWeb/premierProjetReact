import React from 'react';
import Sidebar from '../navigation/Sidebar';
import Languages from '../competences/languages';
import Profil from '../competences/profil';
import Formations from '../competences/formations';
import Experiences from '../competences/experiences';

function Competences() {
   return (
      <div className="competences">
         <Sidebar />
         <div className="comp_content">
            <Languages />
            <Profil />
            <Formations />
            <Experiences />
         </div>
      </div>
   );
};

export default Competences;