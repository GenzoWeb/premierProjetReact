import React from 'react';
import {  BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Competences from './components/pages/Competences';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';

function App() {
   return (
      <div className="App">
         <Router>
            <Switch>
               <Route path="/" exact><Home /></Route>
               <Route path="/Portfolio" exact><Portfolio /></Route>
               <Route path="/Compétences" exact><Competences /></Route>
               <Route path="/Contact" exact><Contact /></Route>
               <Route><NotFound /></Route>
            </Switch>
         </Router>
      </div>
   );
}

export default App;
