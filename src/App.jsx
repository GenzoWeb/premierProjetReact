import React from 'react';
import {  BrowserRouter as Router,
  Switch,
  Route} from 'react-router-dom';

import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Competences from './components/pages/Competences';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';

function App() {
   return (
      <div className="App">
         <Router>
            <Switch>
               <Route path="/" exact><Home /></Route>
               <Route path="/Projets"><Projects /></Route>
               <Route path="/Compétences"><Competences /></Route>
               <Route path="/Contact"><Contact /></Route>
               <Route><NotFound /></Route>
            </Switch>
         </Router>
      </div>
   );
}

export default App;
