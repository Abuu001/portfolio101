import React from 'react'
import './App.css';
import HomePage from "./components/HomePage/HomePage"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Contact from './components/Contact/Contact';
import Work from './components/Work/Work';
import Services from './components/Services/Services';
import Strengths from './components/Strengths/Strengths';
import About from "./components/About/About"
import TopNavBar from './components/TopNavBar/TopNavBar';
import FootBar from './Footbar/FootBar';

function App() {
  return (
    <div className="App">
      <Router>
      <TopNavBar />
        <Switch>
          <Route exact path="/"  component={props=>(<HomePage />)}/>
          <Route exact path="/about-me"  component={props=>(<About />)}/>
          <Route exact path="/contact"  component={props=>(<Contact />)}/>
          <Route exact path="/work"  component={props=>(<Work />)}/>
          <Route exact path="/services"  component={props=>(<Services />)}/>
          <Route exact path="/strenghts"  component={props=>(<Strengths />)}/>
        </Switch>
        <FootBar />
      </Router>
    </div>
  );
}

export default App;
