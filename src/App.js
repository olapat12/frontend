import React from 'react';
import Home from './pages/homepage'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Apply from './pages/application' 
import About from './pages/about' 
import Contact from './pages/contact' 
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import './App.css';
import './index.css';
import Testimony from './pages/testimony';
import Winner from './pages/winners';
import Success from './pages/success';

function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route exact path="/" component={Home} />
       <Route exact path='/application' component={Apply} />
       <Route exact path='/about' component={About} />
       <Route exact path='/contact' component={Contact} />
       <Route exact path='/testimony' component={Testimony} />
       <Route exact path='/approved' component={Winner} />
       <Route exact path='/success' component={Success} />
        </Switch>
        </Router>
    </>
  );
}

export default App;
