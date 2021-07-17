import { Component } from "react";

import { connect } from 'react-redux'

import { fetchAllMeds } from '../redux/actions/index.js'
// import { NavLink } from 'react-router-dom'

import NewMedicationForm from './NewMedicationForm';

import Medication from "./Medication.js";

class Medications extends Component{ 


    
    componentDidMount(){

        
        this.props.fetchAllMeds()
        
    
    }


    render(){ console.log(this.props)
        

        const meds = this.props.medications.map(  (medication)=>{  
            
            console.log(medication.id)
            
            // debugger
      return(<>

       
           <Medication key={medication.id} medication={medication} />

            
            </>)  }  )
       

        return(<>

        <h1>pls render</h1>
      
 
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
 