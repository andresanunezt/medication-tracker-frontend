

import { Component } from "react";

import { Card } from 'react-bootstrap';

import { connect } from 'react-redux'

import EditMedicationForm from "./EditMedicationForm"

// import { NavLink } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from 'react-router-dom';

import DeleteMedicationButton from "./DeleteMedicationButton.js";

import { deleteMedication, editMedication} from '../redux/actions/index.js'

const Medication = ({ medication, deleteMedication, editMedication }) => {




   
   
        console.log(medication)
        console.log(Date())

    return (
        
        // <div>
        //         <h1> name: {this.props.medication.name}</h1>
        //         <h3> Directions:{this.props.medication.directions}</h3>
        //         <h3>Brand Name: {this.props.medication.brand_name}</h3>
        //         <h3>Dosage: {this.props.medimedication_dose} </h3>
        //         <h3>Description: {this.props.medication.medication_description} </h3>
        //         <h3>Last Taken: {this.props.medication.last_taken} </h3>
        //     </div>
        // <Router>

                    <Card style={cardStyle} data-id={medication.id}>
                    <Card.Body>
                    <Card.Title style={{ color: 'red'}}> {medication.name} </Card.Title>
                    <Card.Text> Directions:{medication.directions}</Card.Text>
                    <Card.Text>Brand Name: {medication.brand_name}</Card.Text>
                    <Card.Text>Dosage: {medication.medication_dose} </Card.Text>
                    <Card.Text>Description: {medication.medication_description} </Card.Text>
                    <Card.Text>Last Taken: {medication.last_taken} </Card.Text>
              
                    <DeleteMedicationButton medication={medication}/>
                 
                </Card.Body>

                {/* <EditMedicationForm medication={this.props.medication} /> */}
              
                {/* <Route exact path="/medications/:id/edit" component={ EditMedicationForm} /> */}
           

             <Router>
                <NavLink to={`/medications/${medication.id}/edit`}><button className="btn" onClick={()=>editMedication(medication)}>Edit</button></NavLink>
                <Switch>
               <Route exact path="/medications/:id/edit" component={ EditMedicationForm} />
                
               </Switch>   


                </Router>
            
            </Card>
            
            // </Router>

           
      
    );  


}






const cardStyle = {
    
    width: '18rem', 
    border: '3px solid green', 
    marginBottom: 50, 
    marginTop: 50, 
    paddingBottom: 25, 
    paddingTop: 25, 
    paddingLeft: 50 
}
export default connect(null, { deleteMedication, editMedication })(Medication)
 

