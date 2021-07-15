import { Component } from "react";

import { connect } from 'react-redux'

import { fetchAllMeds } from '../redux/actions/index.js'

import MedicationList from "./MedicationList.js";

class Medications extends Component{ 


    constructor(props){ super(props);
 
        this.state={ rememberUS: [] }

    }
    componentDidMount(){

        
        this.props.fetchAllMeds()
        
            //this.setState({ rememberUS: this.props.fetchUS() })
            //console.log(this.props.fetchUS())
    
    
    }
    render(){ console.log(this.props)
        
        debugger
        // const meds = this.props.medications.medications.map(  (medication)=>{  return(<>

        //    <MedicationList />

            
        //     </>)  }  )
       

        return(<>

        <h1>pls render</h1>
      
        <MedicationList medications={this.props.medications} />

        </>);

    }
    
}


const mapStateToProps =(state)=>{ 

    console.log(state)
    debugger
    return{
       medications: state.medicationReducer,
        
    }

}

export default connect(mapStateToProps, { fetchAllMeds })(Medications)
 