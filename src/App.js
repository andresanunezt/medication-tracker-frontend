import './App.css';

import { Component } from 'react';

import  Medications  from './components/Medications';

import NewMedicationForm from './components/NewMedicationForm';



class App extends Component{ 


  


render() {

  return (<>
    <h1>Medications</h1>

  

      <Medications/>
      
     <NewMedicationForm />
   

  </>)};

 
  }
export default App;


