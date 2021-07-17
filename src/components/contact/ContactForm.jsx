import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");
   const [emailError, setEmailError] = useState("");
   const [formError, setFormError] = useState("");
   const [send, setSend] = useState("");
   const [success, setSuccess] = useState("");
   const [messageError, setMessageError] = useState("");

   let classNameEmail = 'email_empty';
   if(emailError) {
      classNameEmail += ' email_error';
   }

   let classNameInputEmpty = 'form_message';
   let classNameInput = "form_input"
   if(formError) {
      classNameInputEmpty += ' form_message_error';
      classNameInput += ' errorForm';
   }
   if(success) {
      classNameInputEmpty += ' form_message_success';
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      const testInput = function(){
         const testInputName = validTrim(name);
         const testInputEmail = validEmail();
         const testInputMessage = validTrim(message);

         if(!testInputName || !testInputEmail || !testInputMessage) {
            setMessageError("Merci de remplir correctement les champs requis *.");
            setFormError(true);
            return false;
         } else {
            setFormError(false);
            return true;
         }
      }

      if(testInput()) {
         sendFeedback("template_c8agh6h", {
            name,
            email,
            message,
         });
      } else {
         emptyForm();
      }
   };

   const validTrim = (formState) => {
      if(formState.trim().length > 0) {
         return true;
      } else {
         emptyForm();
         return false;
      }
   }

   const validEmail = () => {
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if(email.trim().length > 0) {
         if(email.match(regex)) {
               setEmailError(false);
               return true;
         } else {
               setEmailError(true);
               return false;
         }
      }
   }

   const emptyForm = () => {
      const emptyInput = (inputState, setInputState) => {
         if(inputState.trim().length === 0) {
            setInputState("");
         }
      }
      emptyInput(message, setMessage);
      emptyInput(name, setName);
      emptyInput(email, setEmail);
   }

   const sendFeedback = (templateId, variables) => {
      setSend(true);
      emailjs                                     
      .send("service_aux7irc", templateId, variables, "user_wORazGHcAerr8g0OMZANH")
      .then((res) => {
         successForm();
         setName("");
         setEmail("");
         setMessage("");
      })
      .catch((err) => {
         setSend(false);
         setMessageError("Une erreur s'est produite, veuillez réessayer.");
         setFormError(true);
         emptyForm();
      })
   };

   const successForm = () => {
      setSend(false);
      setSuccess(true);
      setTimeout(() => {
         setSuccess(false);
      }, 3000)
   }

   return (
      <form className="form_contact">
         <div className="contact_name">
            <input
               type="text"
               id="name"
               className={classNameInput}
               name="name"
               onChange={(e) => setName(e.target.value)}
               placeholder="nom *"
               value={name}
               autoComplete="off"
            />
         </div>
         <div className="contact_email">
            <label id="email_empty" className={classNameEmail}>Email non valide</label>
            <input
               type="mail"
               id="email"
               className={classNameInput}
               name="email"
               onChange={function(e){ 
                  setEmail(e.target.value)
                  setEmailError(false)
               }}
               placeholder="email *"
               value={email}
               autoComplete="off"
            />
         </div>
         <div className="contact_message">
            <textarea
               id="message"
               className={classNameInput}
               name="message"
               onChange={(e) => setMessage(e.target.value)}
               placeholder="message *"
               value={message}
            />
         </div>
         <div className="contact_submit">
            <input
               id="form_submit"
               className="form_submit"
               type="button"
               value={ send ? "Envoi ..." : "Envoyer"}
               disabled={ send ? true : false}
               onClick={handleSubmit}
            />
         </div>
         <div className={classNameInputEmpty}>
            { success ? "Votre message a bien été envoyé." : messageError}
         </div>
      </form>
   );
}

export default ContactForm;