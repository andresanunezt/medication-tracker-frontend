import { Component } from "react";

import { connect } from 'react-redux'

import { fetchAllMeds } from '../redux/actions/index.js'



import Medication from "../components/Medication.js";

class Medications extends Component{ 


    
    componentDidMount(){

        
        this.props.fetchAllMeds()
        
    
    }


    render(){ console.log(this.props)
        

        const meds = this.props.medications.map(  (medication, i)=>{  
            
           
            
         
      return(

            
           <Medication key={i} medication={medication}  />

            
           )  }  )
       

        return(<>

     
        <h2 class="centered">Medications</h2>
 
        {meds}


       
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
 