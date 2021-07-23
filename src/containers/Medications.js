import { Component } from "react";
import { connect } from 'react-redux'
import { fetchAllMeds } from '../redux/actions/index.js'
import Medication from "../components/Medication.js";

class Medications extends Component{ 


    componentDidMount(){

        
        this.props.fetchAllMeds()
        
    
    }


    render(){ 
        
        console.log(this.props)
        

        const meds = this.props.medications.map(  (medication, i)=>{  
            
           console.log(medication,i)

           console.log(this)
            
         
      return(

      
           <Medication key={medication.id} medication={medication}  match={this.props.match}/>

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
 