import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Startpage  from './views/startpage';
import Rechner from './views/rechner';


export const App = () => {
  return (
    <div className="App">
      <header className="CO2-Footprint">
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/startpage" element={<Startpage />}/>
          <Route path="/rechner" element={<Rechner />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
