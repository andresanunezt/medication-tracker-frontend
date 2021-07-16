import { Component } from "react"


import { connect } from 'react-redux'

import { editMedication } from '../redux/actions/index.js'




class EditMedicationForm extends Component{


    constructor(props){ super(props);
        
        console.log(props)
        this.state={ last_taken: this.props.medication.last_taken }

    }
    

    submitHandler=(e)=>{ e.preventDefault() 
    
    
       
        console.log(this.state)
        console.log(this.props)
        
        this.props.editMedication( this.state)
         
        
    
    }
    onChangeHandler=(e)=>{ 

        console.log(e.target.name, "  ::  ", e.target.value) 

        this.setState({ [e.target.name]: e.target.value })


        

    }
    


    render(){  

        console.log(this.props)

        return(<>
        
        <div>

            <form onSubmit={this.submitHandler}>

                <input type="text" placeholder="Last Taken" value={this.state.last_taken} onChange={this.onChangeHandler}
                    name="last_taken"
                />
                <input type="submit" value="update"/>
            </form>

               
        </div>

    </>);}

}

// const mapStateToProps =(state)=>{ 

//     console.log(state)
    
//     return{
//        last_taken: state.medicationReducer,
        
//     }

// }


export default connect(null, {editMedication})(EditMedicationForm); 
