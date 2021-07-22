import { Component } from "react";

import { connect } from 'react-redux'

import { fetchAllMeds } from '../redux/actions/index.js'
// import { NavLink } from 'react-router-dom'
// import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import NewMedicationForm from '../components/NewMedicationForm';

import Medication from "../components/Medication.js";

class Medications extends Component{ 


    
    componentDidMount(){

        
        this.props.fetchAllMeds()
        
    
    }


    render(){ console.log(this.props)
        

        const meds = this.props.medications.map(  (medication, i)=>{  
            
            console.log(medication.id)
            
            // debugger
      return(

            <div >
           <Medication  medication={medication} key={i} />

            
           </div>)  }  )
       

        return(<>

     
      
 
        {meds}
{/* <NewMedicationForm /> */}

       
        </>)

    }
    
}


const mapStateToProps =(state)=>{ 

    console.log(state)
    
    return{
       medications: state.medicationReducer,
        
    }

}

export default connect(mapStateToProps, { fetchAllMeds })(Medications)
 