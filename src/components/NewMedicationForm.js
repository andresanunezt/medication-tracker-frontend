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
        this.props.history.push('/medications')
        
    
    }
    onChangeHandler=(e)=>{ 

      
        this.setState({ [e.target.name]: e.target.value })


        

    }
  
     


    render(){  


        return(<>
        
        <div className="centered">
            
            <form onSubmit={this.submitHandler}>
            <h4>ADD MEDICATION</h4>
                <input type="text" placeholder="Name" value={this.state.name} onChange={this.onChangeHandler}
                    name="name"
                /> <br></br>
                <input type="text" placeholder="Directions" value={this.state.directions} onChange={this.onChangeHandler}
                    name="directions"
                /> <br></br>
                <input type="text" placeholder="Brand Name" value={this.state.brand_name} onChange={this.onChangeHandler}
                    name="brand_name"
                /><br></br>
                <input type="text" placeholder="Dosage" value={this.state.medication_dose} onChange={this.onChangeHandler}
                    name="medication_dose"
                />    <br></br>
                <input type="textarea" placeholder="Description" value={this.state.medication_description} onChange={this.onChangeHandler}
                    name="medication_description"
                /><br></br>
                <input type="text" placeholder="Last Taken" value={this.state.last_taken} onChange={this.onChangeHandler}
                    name="last_taken"
                />  <br></br>

                <br></br>
                <input type="submit" value="submit"/>
                
            </form>

        <br></br>
            
                
        </div>

    </>);}

}
export default connect(null, { addNewMedication })(NewMedicationForm);  