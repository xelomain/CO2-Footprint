import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Startpage  from './views/startpage';
import Rechner from './views/rechner';


export const App = () => {
  return (
    <div className="App">
      <header className="CO2-Footprint">
      </header>
      <Router>
        <Routes>
          <Route path="*">
            <Routes>
              <Route path="/startpage">
                <Startpage />
              </Route>
              <Route path="/rechner">
                <Rechner />
              </Route>
              <Route path="/welt-co2-fußabdruck">

              </Route>
              <Route path="/wikipedia">

              </Route>
            </Routes>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
