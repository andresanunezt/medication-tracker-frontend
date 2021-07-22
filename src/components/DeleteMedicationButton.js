import { Component } from "react"

import { connect } from 'react-redux'

import { deleteMedication} from '../redux/actions/index.js'


class DeleteMedicationButton extends Component{ 


    clickHandler=(e)=>{  //console.log(e);  //
        // console.log(e.target.innerText)
  
  
        console.log(this.props)
          
          if(e.target.matches("button")){ console.log(e.target.innerText) 


    
          
              this.props.deleteMedication(this.props.medication)
  
          } 
          
        }


    render(){ console.log(this.props)
        

       

        return(<>


<br></br>
<button onClick={this.clickHandler}> Delete Medication</button><br/>
<br></br>
        

        </>)

    }
    


}

export default connect(null, { deleteMedication })(DeleteMedicationButton)
 