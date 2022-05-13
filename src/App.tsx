import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import startpage  from './views/startpage';


export const App = () => {
  return (
    <div className="App">
      <header className="CO2-Footprint">
      </header>
      <Router>
        <Switch>
          <Route path="*">
            <Switch>
              <Route path="/startpage">
                <startpage />
              </Route>
              <Route path="/rechner">
                
              </Route>
              <Route path="/welt-co2-fußabdruck">

              </Route>
              <Route path="/wikipedia">

              </Route>
            </Switch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
