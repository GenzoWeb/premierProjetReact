import React, { useState } from 'react';

function Project(props) {
   let {title, realisation, picture, info, github, source} = props.data;
   const [infosShow, setInfosShow] = useState(false);
   const toggleInfo = () => setInfosShow((s) => !s);

   return (
      <>
         <div className="card">
            <div className="card_title">
               <h2>{title}</h2>
            </div>
            <img src={picture} alt="représentant le projet" />
            <div className="card_infos">
               <i className="fas fa-plus-circle" onClick={() =>{toggleInfo()}}></i>
            </div>
         </div>
         {
            infosShow && (
               <div className="info">
                  <div className="info_content">
                     <div className="links_info">
                        {github ? <a href={github} className="git_infos" rel="noreferrer" target="_blank">Github</a> : ''}
                        <a href={source} className="source_infos" rel="noreferrer" target="_blank">Voir page</a>
                     </div>
                     <h2>{title}</h2>
                     <div className="text_info">
                        <p className="description">{realisation} :</p>
                        <p>{info}</p>
                     </div>
                     <button className="button_info" onClick={() =>{toggleInfo()}}>Retour</button>
                  </div>
                  <div className="opacity_info" onClick={() =>{toggleInfo()}}></div>
               </div>
            )
         }
      </>
   );
}

export default Project;