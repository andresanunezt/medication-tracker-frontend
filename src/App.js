import './App.css';



import { Component } from 'react';


import  Medications  from './components/Medications';





class App extends Component{ 
  
  constructor(props){ super(props);


    

  }
  

  


render() {

  return (<>
    <h1>is is rendering?</h1>

  

      <Medications/>
    
     
   

  </>)};

 
  }
export default App;


