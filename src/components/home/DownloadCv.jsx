import React from 'react';
import { jsPDF } from "jspdf";
import cv from "../../images/CV.png"

function DownloadCv() {
   const dlCv = () =>{
      const doc = new jsPDF('p', 'mm', 'a4');
      doc.addImage(cv, 'PNG', 0, 0, 210, 297)
      doc.save('CVJD.pdf')
   };

   return (
      <button className="cv" onClick={() =>{dlCv()}}>Téléchargez CV</button>
   );
};

export default DownloadCv;