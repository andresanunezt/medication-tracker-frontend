import './App.css';

import { Component } from 'react';

import  Medications  from './containers/Medications';

import NewMedicationForm from './components/NewMedicationForm';

import EditMedicationForm from './components/EditMedicationForm';

import Footer from './components/Footer';

import Navbar from './components/Navbar';

import Home from './components/Home'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component{ 


  


render() {

  return (<>
  <div>
  

    <Router>
    <Navbar />
    <Switch>
    <Route exact path ="/" component ={Home} /> 
    <Route exact path="/medications" component={ Medications } />
    <Route exact path="/medications/new" component={ NewMedicationForm } />
    <Route exact path="/medications/:id/edit" component={ EditMedicationForm} />
     
     </Switch>
     <Footer />
     </Router>
</div>
  </>)};

 
  }
export default App;


