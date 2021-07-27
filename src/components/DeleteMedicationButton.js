
import { connect } from 'react-redux'

import { deleteMedication} from '../redux/actions/index.js'


function DeleteMedicationButton(props) { 


   function clickHandler(e) {  
  
        console.log(props)
          
          if(e.target.matches("button")){ 
              
            
            console.log(e.target.innerText) 
            
            props.deleteMedication(props.medication)
  
          } 
          
        }


    // render(){ 

        return(<>

        
            
                <button  onClick={clickHandler}>Delete Medication</button><br/>
                <br></br>


        </>)

    // }
    


}

export default connect(null, { deleteMedication })(DeleteMedicationButton)
 