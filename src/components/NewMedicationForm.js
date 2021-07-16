import { Component } from "react"


import { connect } from 'react-redux'  

import { addNewMedication } from '../redux/actions/index.js'
 




class NewMedicationForm extends Component{


    constructor(){ super();
        
        this.state={ name: "",directions: "", brand_name: "", medication_dose: "", medication_description: "",last_taken: "" }

    }
    

    submitHandler=(e)=>{ e.preventDefault() 
    
    
        console.log(this.state)
        console.log(this.props)
        console.log()

        
        this.props.addNewMedication( this.state )
         
        
    
    }
    onChangeHandler=(e)=>{ 

        console.log(e.target.name, "  ::  ", e.target.value)  //

        

        this.setState({ [e.target.name]: e.target.value })


        

    }
  
 
    
    // alertMe=(typingInput)=>{   }
     


    render(){  


        return(<>
        
        <div>

            <form onSubmit={this.submitHandler}>
                
                <input type="text" placeholder="Name" value={this.state.name} onChange={this.onChangeHandler}
                    name="name"
                />
                <input type="text" placeholder="Directions" value={this.state.directions} onChange={this.onChangeHandler}
                    name="directions"
                />
                <input type="text" placeholder="Brand Name" value={this.state.brand_name} onChange={this.onChangeHandler}
                    name="brand_name"
                />
                <input type="text" placeholder="Dosage" value={this.state.medication_dose} onChange={this.onChangeHandler}
                    name="medication_dose"
                />    
                <input type="textarea" placeholder="Description" value={this.state.medication_description} onChange={this.onChangeHandler}
                    name="medication_description"
                />
                <input type="text" placeholder="Last Taken" value={this.state.last_taken} onChange={this.onChangeHandler}
                    name="last_taken"
                />  
                <input type="integer" placeholder="User" value={this.state.user_id} onChange={this.onChangeHandler}
                    name="user_id"
                />                           
                <input type="submit" value="submit"/>
            </form>


            
        </div>

    </>);}

}
export default connect(null, { addNewMedication })(NewMedicationForm);  