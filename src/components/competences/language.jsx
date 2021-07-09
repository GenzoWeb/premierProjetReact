import React from 'react';

function Language(props) {
   let {title, level} = props;

   return (
      <div className="language"> 
         <p className="title_language">{title}</p>
         <div className="circle_language">
            <div className={`circle ${level > 0 && "circle_plain"}`}></div>
            <div className={`circle ${level > 1 && "circle_plain"}`}></div>
            <div className={`circle ${level > 2 && "circle_plain"}`}></div>
            <div className={`circle ${level > 3 && "circle_plain"}`}></div>
            <div className={`circle ${level > 4 && "circle_plain"}`}></div>
         </div>
      </div>
   );
}

export default Language;