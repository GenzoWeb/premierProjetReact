import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      if(validTrim(name) && validEmail() && validTrim(message)) {
         sendFeedback("template_c8agh6h", {
            name,
            email,
            message,
         });
      } else {
        emptyForm("Merci de remplir correctement les champs requis *.");
      }
   };

   const validTrim = (formState) => {
      if(formState.trim().length > 0) {
         return true;
      } else {
         return false;
      }
   }

   const validEmail = () => {
      let mail = document.getElementById('email_empty');
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if(email.match(regex)) {
         mail.style.display = "none";
         return true;
      } else {
         mail.style.display = "block";
         mail.style.animation = "moving 1s";
         setTimeout(() => {
            mail.style.animation = "none";
         }, 1000)
         return false;
      }
   }

   const emptyForm = (errorMessage) => {

      const emptyInput = (inputState, idInput) => {
         if(inputState.trim().length === 0) {
            document.getElementById(idInput).value = "";
         }
      }

      emptyInput(message, 'message')
      emptyInput(name, 'name')

      let formMessage = document.querySelector('.form_message');
      formMessage.innerHTML = errorMessage;
      formMessage.style.display = "block";
      formMessage.style.background = "rgb(228, 0, 0)";
      document.getElementById('name').classList.add('errorForm');
      document.getElementById('email').classList.add('errorForm');
      document.getElementById('message').classList.add('errorForm');
   }

   const sendFeedback = (templateId, variables) => {
      let form_submit = document.getElementById('form_submit');
      form_submit.value="Envoi ...";
      form_submit.setAttribute('disabled', true);
      let formMessage = document.querySelector('.form_message');
      formMessage.style.display = "none";
      
      emailjs                                     
      .send("service_aux7irc", templateId, variables, "user_wORazGHcAerr8g0OMZANH")
      .then((res) => {
         successForm();
         setName("");
         setEmail("");
         setMessage("");
      })
      .catch((err) => {
         if(form_submit.getAttribute("disabled")){
            form_submit.removeAttribute('disabled', true);
         }
         emptyForm("Une erreur s'est produite, veuillez réessayer.")
      })
   };

   const successForm = () => {
      let form_submit = document.getElementById('form_submit');
      form_submit.removeAttribute('disabled', true);
      let formMessage = document.querySelector('.form_message');
      formMessage.innerHTML = "Votre message a bien été envoyé";
      formMessage.style.background = "green";
      formMessage.style.display = "block";
      document.getElementById('name').classList.remove('errorForm');
      document.getElementById('email').classList.remove('errorForm');
      document.getElementById('message').classList.remove('errorForm');
      form_submit.style.display = "block";
      
      setTimeout(() => {
         formMessage.style.display = "none";
      }, 3000)
   }

   return (
      <form className="form_contact">
         <div className="contact_name">
            <input
               type="text"
               id="name"
               className="form_input"
               name="name"
               onChange={(e) => setName(e.target.value)}
               placeholder="nom *"
               value={name}
               autoComplete="off"
            />
         </div>
         <div className="contact_email">
            <label id="email_empty" className="email_empty">Email non valide</label>
            <input
               type="mail"
               id="email"
               className="form_input"
               name="email"
               onChange={(e) => setEmail(e.target.value)}
               placeholder="email *"
               value={email}
               autoComplete="off"
            />
         </div>
         <div className="contact_message">
            <textarea
               id="message"
               className="form_textarea"
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
               value="Envoyer"
               onClick={handleSubmit}
            />
         </div>
         <div className="form_message">Erreur veuillez remplir tout les champs</div>
      </form>
   );
}

export default ContactForm;