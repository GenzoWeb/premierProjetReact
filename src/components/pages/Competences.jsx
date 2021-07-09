import React from 'react';
import Sidebar from '../navigation/Sidebar';
import Languages from '../competences/Languages';
import Profil from '../competences/Profil';
import Formations from '../competences/Formations';
import Experiences from '../competences/Experiences';

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