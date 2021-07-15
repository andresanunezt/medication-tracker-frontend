
import { Component } from "react";

import Medication from "./Medication";


class MedicationList extends Component {


  



    render(){ console.log(this.props)
      
     
      const meds = this.props.medications.map(  (medication)=>{  return(

<Medication key={medication.id} medication={medication}/> ) })


          return (
        
            {meds} 

        );
   

                
}

}



// const mapStateToProps =(state)=>{ 

//   console.log(state.medication)
//     return{
        
//         medications: state.medications,
      
//     }

// }



//  export default connect(mapStateToProps, { fetchAllMeds })(MedicationList)
    



// import React from 'react';

// import Medication from './Medication'

// const MedicationList = (props) => {

//     return (
//         <div>
//             {props.medications.map(med => <Medication key={med.id} medication={med}/>) }
            
//         </div>
//     );
// };

export default MedicationList;