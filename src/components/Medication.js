

import { Card } from 'react-bootstrap';

import { connect } from 'react-redux'

import EditMedicationForm from "./EditMedicationForm"

// import { NavLink } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from 'react-router-dom';

import DeleteMedicationButton from "./DeleteMedicationButton.js";

import { deleteMedication, editMedication} from '../redux/actions/index.js'

const Medication = ({ medication, deleteMedication, editMedication }) => {






    return (
        
       
                <div className="centered">
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

               

             <Router>
                <NavLink to={`/medications/${medication.id}/edit`}><button className="btn" onClick={()=>editMedication(medication)}>Edit</button></NavLink>
                <Switch>
               <Route exact path="/medications/:id/edit" component={ EditMedicationForm} />
                
               </Switch>   


                </Router>
            
            </Card>
            
            
            </div>
           
      
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
 

