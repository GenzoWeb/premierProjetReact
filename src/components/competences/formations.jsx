import React from 'react';
import { formationsData } from '../../data/formationsData';

function Formations() {
   return (
      <div className="formations_content">
         <h2>Formations</h2>
         {formationsData.map(dataFormation => 
            <div className="formation" key={dataFormation.id}>
               <p>{dataFormation.date}</p>
               <h3>{dataFormation.title}</h3>
               <p>{dataFormation.location}</p>
            </div>
         )}
      </div>
   );
}

export default Formations;