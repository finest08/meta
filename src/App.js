import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
 
import Aus from './countries/Australia/Aus';
import AuBusiness from './countries/Australia/AuBusiness';
import AuEntertainment from './countries/Australia/AuEntertainment';
import AuHealth from './countries/Australia/AuHealth';
import AuTechnology from './countries/Australia/AuTechnology';
import AuSports from './countries/Australia/AuSports';
import AuScience from './countries/Australia/AuScience';

import Italy from './countries/Italy/Italy';
import ItBusiness from './countries/Italy/ItBusiness';
import ItEntertainment from './countries/Italy/ItEntertainment';
import ItHealth from './countries/Italy/ItHealth';
import ItTechnology from './countries/Italy/ItTechnology';
import ItSports from './countries/Italy/ItSports';
import ItScience from './countries/Italy/ItScience';

import New from './countries/NZ/New';
import NzBusiness from './countries/NZ/NzBusiness';
import NzEntertainment from './countries/NZ/NzEntertainment';
import NzHealth from './countries/NZ/NzHealth';
import NzTechnology from './countries/NZ/NzTechnology';
import NzSports from './countries/NZ/NzSports';
import NzScience from './countries/NZ/NzScience';

import Brazil from './countries/Brazil/Brazil';
import BrBusiness from './countries/Brazil/BrBusiness';
import BrEntertainment from './countries/Brazil/BrEntertainment';
import BrHealth from './countries/Brazil/BrHealth';
import BrTechnology from './countries/Brazil/BrTechnology';
import BrSports from './countries/Brazil/BrSports';
import BrScience from './countries/Brazil/BrScience';

import Thai from './countries/Thailand/Thai';
import ThBusiness from './countries/Thailand/ThBusiness';
import ThEntertainment from './countries/Thailand/ThEntertainment';
import ThHealth from './countries/Thailand/ThHealth';
import ThTechnology from './countries/Thailand/ThTechnology';
import ThSports from './countries/Thailand/ThSports';
import ThScience from './countries/Thailand/ThScience';

import Uk from './countries/UK/Uk';
import UkBusiness from './countries/UK/UkBusiness';
import UkEntertainment from './countries/UK/UkEntertainment';
import UkHealth from './countries/UK/UkHealth';
import UkTechnology from './countries/UK/UkTechnology';
import UkSports from './countries/UK/UkSports';
import UkScience from './countries/UK/UkScience';

import Germany from './countries/Germany/Germany';
import GrBusiness from './countries/Germany/GrBusiness';
import GrEntertainment from './countries/Germany/GrEntertainment';
import GrHealth from './countries/Germany/GrHealth';
import GrTechnology from './countries/Germany/GrTechnology';
import GrSports from './countries/Germany/GrSports';
import GrScience from './countries/Germany/GrScience';

import Slovakia from './countries/Slovakia/Slovakia';
import SkBusiness from './countries/Slovakia/SkBusiness';
import SkEntertainment from './countries/Slovakia/SkEntertainment';
import SkHealth from './countries/Slovakia/SkHealth';
import SkTechnology from './countries/Slovakia/SkTechnology';
import SkSports from './countries/Slovakia/SkSports';
import SkScience from './countries/Slovakia/SkScience';

import Usa from './countries/USA/Usa';
import UsBusiness from './countries/USA/UsBusiness';
import UsEntertainment from './countries/USA/UsEntertainment';
import UsHealth from './countries/USA/UsHealth';
import UsTechnology from './countries/USA/UsTechnology';
import UsSports from './countries/USA/UsSports';
import UsScience from './countries/USA/UsScience';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/usa" component={Usa} />
        <Route exact path="/us/science" component={UsScience} />
        <Route exact path="/us/sports" component={UsSports} />
        <Route exact path="/us/technology" component={UsTechnology} />
        <Route exact path="/us/health" component={UsHealth} />
        <Route exact path="/us/entertainment" component={UsEntertainment} />
        <Route exact path="/us/business" component={UsBusiness} />

        
        <Route exact path="/slovakia" component={Slovakia} />
        <Route exact path="/sk/science" component={SkScience} />
        <Route exact path="/sk/sports" component={SkSports} />
        <Route exact path="/sk/technology" component={SkTechnology} />
        <Route exact path="/sk/health" component={SkHealth} />
        <Route exact path="/sk/entertainment" component={SkEntertainment} />
        <Route exact path="/sk/business" component={SkBusiness} />
        
        <Route exact path="/gr/science" component={GrScience} />
        <Route exact path="/gr/sports" component={GrSports} />
        <Route exact path="/gr/technology" component={GrTechnology} />
        <Route exact path="/gr/health" component={GrHealth} />
        <Route exact path="/gr/entertainment" component={GrEntertainment} />
        <Route exact path="/gr/business" component={GrBusiness} />
        <Route exact path="/germany" component={Germany} />

        <Route exact path="/uk" component={Uk} />
        <Route exact path="/uk/science" component={UkScience} />
        <Route exact path="/uk/sports" component={UkSports} />
        <Route exact path="/uk/technology" component={UkTechnology} />
        <Route exact path="/uk/health" component={UkHealth} />
        <Route exact path="/uk/entertainment" component={UkEntertainment} />
        <Route exact path="/uk/business" component={UkBusiness} />

        <Route exact path="/th/science" component={ThScience} />
        <Route exact path="/th/sports" component={ThSports} />
        <Route exact path="/th/technology" component={ThTechnology} />
        <Route exact path="/th/health" component={ThHealth} />
        <Route exact path="/th/entertainment" component={ThEntertainment} />
        <Route exact path="/th/business" component={ThBusiness} />
        <Route exact path="/thai" component={Thai} />

        <Route exact path="/br/science" component={BrScience} />
        <Route exact path="/br/sports" component={BrSports} />
        <Route exact path="/br/technology" component={BrTechnology} />
        <Route exact path="/br/health" component={BrHealth} />
        <Route exact path="/br/entertainment" component={BrEntertainment} />
        <Route exact path="/br/business" component={BrBusiness} />
        <Route exact path="/brazil" component={Brazil} />


        <Route exact path="/nz/science" component={NzScience} />
        <Route exact path="/nz/sports" component={NzSports} />
        <Route exact path="/nz/technology" component={NzTechnology} />
        <Route exact path="/nz/health" component={NzHealth} />
        <Route exact path="/nz/entertainment" component={NzEntertainment} />
        <Route exact path="/nz/business" component={NzBusiness} />
        <Route exact path="/nz" component={New} />


        <Route exact path="/it/business" component={ItBusiness} />
        <Route exact path="/it/entertainment" component={ItEntertainment} />
        <Route exact path="/it/health" component={ItHealth} />
        <Route exact path="/it/technology" component={ItTechnology} />
        <Route exact path="/it/sports" component={ItSports} />
        <Route exact path="/it/science" component={ItScience} />
        <Route exact path="/italy" component={Italy} />

        <Route exact path="/au/science" component={AuScience} />
        <Route exact path="/au/sports" component={AuSports} />
        <Route exact path="/au/technology" component={AuTechnology} />
        <Route exact path="/au/health" component={AuHealth} />
        <Route exact path="/au/entertainment" component={AuEntertainment} />
        <Route exact path="/au/business" component={AuBusiness} />
        <Route exact path="/au" component={Aus} />
        
        <Route default path="/" component={Menu} />
      </Switch>
    </Router>
  
  );
}

export default App;