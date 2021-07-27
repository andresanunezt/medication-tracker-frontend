import { Component } from "react"
import { connect } from 'react-redux'
import { editMedication } from '../redux/actions/index.js'
import DateTimePicker from 'react-datetime-picker';


class EditMedicationForm extends Component{


   

    constructor(){ super();
        
        console.log()
        this.state={id: "", last_taken: new Date()}

    }


    componentDidMount() {

        this.setState({
            id: this.props.medication.id,
            last_taken: new Date(this.props.medication.last_taken)
        
        })


        console.log(this.state)

    }
    

    submitHandler=(e)=>{ 
        
        e.preventDefault() 
    
    

        console.log(this.state)
        console.log(this.props)
        
        this.props.editMedication(this.state)
        this.props.history.push('/medications')
        
    
    }
    
    
    // onChangeHandler=(e)=>{ 

        

    //     console.log(e)
    //     // console.log("name: ",e.target.name, "value: ", e.target.value) 
    //     // console.log(date)
    //     // this.setState({ [e.target.name]: e.target.value })
    //     this.setState({ last_taken: new Date(e) })
    //     // this.setState({ last_taken: new Date(e) })
    //     // this.setState({ last_taken: date })
    //     console.log(this.state)

        
        

    // }

    dateHandler=(e) => {

        this.setState({ last_taken: e })
    }
    

    

    render(){  

        console.log(this.props)

        return(<>
        
       
           
           

        <h5> Medication: {this.props.medication.name}</h5>
        <h5> Dosage: {this.props.medication.medication_dose}</h5>
        <h5> Last Taken On: {this.props.medication.last_taken}</h5>
  
            <form onSubmit={this.submitHandler}>
     
            <DateTimePicker onChange={this.dateHandler} value={this.state.last_taken} name="last_taken"/>

                {/* <input type="text" placeholder="Last Taken" value={this.state.last_taken} onChange={this.onChangeHandler}
                    name="last_taken"
                /> */}

            
            <br></br>
            <br></br>
            <input type="submit" value="update"/>
            
            </form>

           
            <h5> Update the time you last took your medication! </h5>
   

    </>);}

}

const mapStateToProps =(state,routerProps)=>{ 
    console.log(routerProps)
    console.log(this)
    console.log(state)
    const id = parseInt(routerProps.medication.id)
    console.log(id)
    return{
        medication: state.medicationReducer.find(med => med.id === id)
        
    }

}


export default connect(mapStateToProps, {editMedication})(EditMedicationForm); 
