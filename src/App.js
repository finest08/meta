import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import New from './countries/New';
import Aus from './countries/Aus';
import Uk from './countries/Uk';
import Italy from './countries/Italy';
import Germany from './countries/Germany';
import Usa from './countries/Usa';
import Slovakia from './countries/Slovakia';
import Thai from './countries/Thai'; 
import Brazil from './countries/Brazil';


function App() {
  return (
    <Router>
      <Switch>
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