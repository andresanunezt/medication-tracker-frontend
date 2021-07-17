import { Component } from "react"


import { connect } from 'react-redux'

import { editMedication } from '../redux/actions/index.js'




class EditMedicationForm extends Component{


    constructor(){ super();
        
        console.log()
        this.state={ id: "", last_taken: "" }

    }


    componentDidMount() {

        this.setState({
            id: this.props.medication.id,
            last_taken: this.props.medication.last_taken
        
        })


        console.log(this.state)

    }
    

    submitHandler=(e)=>{ 
        
        e.preventDefault() 
    
    

        console.log(this.state)
        console.log(this.props)
        
        this.props.editMedication( this.state)
         
        
    
    }
    onChangeHandler=(e)=>{ 

        console.log("name: ",e.target.name, "value: ", e.target.value) 

        this.setState({ [e.target.name]: e.target.value })

        console.log(this.state)

        
        

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

const mapStateToProps =(state,medId)=>{ 

    console.log(state)
    const id = parseInt(medId.match.params.id)
    return{
        medication: state.medicationReducer.find(med => med.id === id)
        
    }

}


export default connect(mapStateToProps, {editMedication})(EditMedicationForm); 
