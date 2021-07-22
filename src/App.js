import './App.css';

import { Component } from 'react';

import  Medications  from './containers/Medications';

import NewMedicationForm from './components/NewMedicationForm';

import EditMedicationForm from './components/EditMedicationForm';

import Navbar from './components/Navbar';

import Home from './components/Home'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component{ 


  


render() {

  return (<>
  <div>
    <h1>Medications</h1>

    <Router>
    <Navbar />
    <Switch>
    <Route exact path ="/" component ={Home} /> 
    <Route exact path="/medications" component={ Medications } />
    <Route exact path="/medications/new" component={ NewMedicationForm } />
    <Route exact path="/medications/:id/edit" component={ EditMedicationForm} />
     
     </Switch>
 
     </Router>
</div>
  </>)};

 
  }
export default App;


