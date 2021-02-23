import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import New from './countries/NZ/New';

import Uk from './countries/Uk';
import Italy from './countries/Italy';
import Germany from './countries/Germany';
import Usa from './countries/Usa';
import Slovakia from './countries/Slovakia';
import Thai from './countries/Thai'; 
import Brazil from './countries/Brazil';

import Aus from './countries/Australia/Aus';
import AuBusiness from './countries/Australia/AuBusiness';
import AuEntertainment from './countries/Australia/AuEntertainment';
import AuHealth from './countries/Australia/AuHealth';
import AuTechnology from './countries/Australia/AuTechnology';
import AuSports from './countries/Australia/AuSports';
import AuScience from './countries/Australia/AuScience';




function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/au/science" component={AuScience} />
        <Route exact path="/au/sports" component={AuSports} />
        <Route exact path="/au/technology" component={AuTechnology} />
        <Route exact path="/au/health" component={AuHealth} />
        <Route exact path="/au/entertainment" component={AuEntertainment} />
        <Route exact path="/au/business" component={AuBusiness} />
        <Route exact path="/au" component={Aus} />
        <Route exact path="/uk" component={Uk} />
        <Route exact path="/italy" component={Italy} />
        <Route exact path="/germany" component={Germany} />
        <Route exact path="/usa" component={Usa} />
        <Route exact path="/slovakia" component={Slovakia} />
        <Route exact path="/thai" component={Thai} />
        <Route exact path="/brazil" component={Brazil} />
        <Route exact path="/nz" component={New} />
        <Route default path="/" component={Menu} />
      </Switch>
    </Router>
  
  );
}

export default App;