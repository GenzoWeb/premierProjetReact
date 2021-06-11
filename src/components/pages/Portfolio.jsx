import React from 'react';
import Sidebar from '../navigation/Sidebar';
import ProjectsList from '../portfolio/ProjectsList';

function Portfolio() {
   return (
      <div className="portfolio">
         <Sidebar />
         <ProjectsList/>
      </div>
   );
};

export default Portfolio;