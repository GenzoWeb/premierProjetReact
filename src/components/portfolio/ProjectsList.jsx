import React, {useState} from 'react';
import { portfolioData } from '../../data/portfolioData';
import { languagesData } from '../../data/languagesData';
import Project from './Project';

function ProjectsList() {
   const [language, setLanguage] = useState('css');
   const handleLanguage = (lang) => setLanguage(lang);

   let languageReact = true;
   if(language !== 'react') {
      languageReact = false;
   }

   return (
      <div className="portfolio_content">
         <div className="menu_languages">
            <ul>
               {languagesData.map(dataLang => 
                  <li key={dataLang.id} onClick={() =>{handleLanguage(dataLang.language)}}>
                     <input className="input_radio" type="radio" name="radio" checked={dataLang.language === language} value={dataLang.language} id={dataLang.language} readOnly />
                     <label htmlFor={dataLang.language}>{dataLang.language}</label>
                  </li> 
               )}
            </ul>
         </div>
         <div className="projects">
            {languageReact ?
               <div className="info_react">
                  <div className="info_content_react">
                     <h2>Mon premier projet react</h2>
                     <div className="text_info">
                        <p className="description">Projet personnel :</p>
                        <p>Je continue mon apprentissage en découvrant la librairie react. Ce site a été entièrement réalisé avec react.</p>
                     </div>
                     <div className="links_react">
                        <a href="https://github.com/GenzoWeb/premierProjetReact" className="git_infos_react" rel="noreferrer" target="_blank">Github</a>
                     </div>
                  </div>
               </div>
            : 
               <>
                  {portfolioData
                     .filter(data => data.languages.includes(language))
                     .map(data => <Project key={data.id} data={data}/>)
                  }
               </>
            }
         </div>
      </div>
   );
}

export default ProjectsList;