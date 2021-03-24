import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { About } from './pages/About';
import { Home } from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <Switch>
          <Route component={Home} path='/' exact />
          <Route component={About} path='/about' exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
