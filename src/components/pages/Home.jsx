import React from 'react';
import Sidebar from '../Sidebar';

const Home = () => {
   return (
      <div className="home">
         <Sidebar />
         <div className="home_content">
            <p>Page d'accueil</p>
         </div>
      </div>
   );
};

export default Home;