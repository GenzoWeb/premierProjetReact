import React from 'react';

function Notfound() {
   return (
      <div className="not_found">
         <div className="not_found_content">
            <p className="text_not_found">Cette page n'existe pas</p>   
            <div className="image404">
               <img src="/images/emoji_404.png" alt="emoji désolé" />
            </div>
         </div>
         <div className="link_404">
            <a className="btn" href="/">Retournez à l'accueil</a>
         </div>
      </div>
   );
};

export default Notfound;