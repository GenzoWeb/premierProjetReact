import React from 'react';
import Typewriter from 'typewriter-effect';

function TextWriter() {
   return (
      <Typewriter
         options={{
            strings: ['Bienvenue', 'Développeur web'],
            autoStart: true,
            loop: true,
         }}
      />
   );
};

export default TextWriter;