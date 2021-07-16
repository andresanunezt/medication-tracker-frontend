import { Component } from "react"


import { connect } from 'react-redux'

// import { editReActor } from './redux/actions/index.js'




class EditMedicationForm extends Component{


    constructor(props){ super(props);
        
        this.state={ name: "" }

    }
    

    submitHandler=(e)=>{ e.preventDefault() 
    
    
        console.log("IN THE FORM - Name:  ", this.state.name)

        
        this.props.editReActor( this.state )
            //X// this.props.reActorNameSUBMIT(this.state.name)
        
    
    }
    onChangeHandler=(e)=>{ //console.log("editing...") 

        console.log(e.target.name, "  ::  ", e.target.value) 

        this.setState({ [e.target.name]: e.target.value })


        

    }
    


    render(){  

        return(<>
        
        <div>

            <form onSubmit={this.submitHandler}>

                <input type="text" placeholder="name" value={this.state.name} onChange={this.onChangeHandler}
                    name="name"
                />
                <input type="submit" value="update"/>
            </form>

               
        </div>

    </>);}

}

const mapDispatchToProps =(dispatch)=>{

    console.log("========    ", dispatch.action)  // 

    return{ 
        // if(dispatch)
        editReActor: (newReActor)=> dispatch(editReActor(newReActor))

    }

}
\
export default connect(null, mapDispatchToProps)(EditMedicationForm); 
