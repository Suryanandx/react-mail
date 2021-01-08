import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import './App.css';
import EmailList from './components/Email/EmailList';
import Mail from './components/Email/Mail';
import Header from './components/Header/Header';
import Sidebar from './components/Siderbar/Sidebar';

function App() {
  return (
    <Router>
      <div className="app">
      <Header/>
      <div className="app__body">
        <Sidebar/>
        <Switch>
          <Route path="/mail">
            <Mail />
          </Route>
          <Route path="/">
            <EmailList/>
          </Route>

        </Switch>
      </div>
      
      
    </div>
    </Router>
    
  );
}

export default App;
