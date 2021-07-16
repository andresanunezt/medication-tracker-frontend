import './App.css';

import { Component } from 'react';

import  Medications  from './components/Medications';

import NewMedicationForm from './components/NewMedicationForm';



class App extends Component{ 
  
  constructor(props){ super(props);


    

  }
  

  


render() {

  return (<>
    <h1>is is rendering?</h1>

  

      <Medications/>
      
     <NewMedicationForm />
   

  </>)};

 
  }
export default App;


