import React from 'react';
import Typewriter from 'typewriter-effect';

const TextWriter = () => {
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