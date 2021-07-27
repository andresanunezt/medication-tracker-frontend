import './App.css';
import { Component } from 'react';
import  Medications  from './containers/Medications';
import EditMedicationForm from './containers/EditMedicationForm';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Logo from './components/Logo'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component{ 


render() {

  return (
  <div>
  

    <Router>
    <Logo />
    <Navbar />
    <Switch>
    <Route exact path ="/" component ={Home} /> 
    <Route path='/medications' render={routerProps => <Medications {...routerProps} />} />
    <Route exact path="/medications/:id/edit" component={ EditMedicationForm} />
     </Switch>
     <Footer />
     </Router>

      </div>
       
  )};

 
  }
export default App;


