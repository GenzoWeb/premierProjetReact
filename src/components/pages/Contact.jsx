import React from 'react';
import Sidebar from '../navigation/Sidebar';
import ContactForm from '../contact/ContactForm';

function Contact() {
   return (
      <div className="contact">
         <Sidebar />
         <div className="contact_content">
            <div className="contact_contain">
               <h2>Contactez-moi</h2>
               <ContactForm />
            </div>
         </div>
      </div>
   );
};

export default Contact;