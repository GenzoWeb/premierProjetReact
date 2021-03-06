import React from 'react';
import Sidebar from '../navigation/Sidebar';
import TextWriter from '../home/TextWriter';
import DownloadCv from '../home/DownloadCv';

function Home() {
   return (
      <div className="home">
         <Sidebar />
         <div className="home_contain">
            <div className="home_content">
               <h1 className="home_top"><TextWriter /></h1>
               <div className="home_mid"><DownloadCv /></div>
               <div className="home_bot">
                  <i className="fab fa-js-square"></i>
                  <div className="php"><i className="fab fa-php"></i></div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;