

import { Card } from 'react-bootstrap';

import { connect } from 'react-redux'

import EditMedicationForm from './EditMedicationForm.js';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import DeleteMedicationButton from "./DeleteMedicationButton.js";

import {  editMedication} from '../redux/actions/index.js'

const Medication = ({ medication, editMedication, match }) => {


    

    let strftime = require('strftime')
    // console.log(strftime('%F %T', medication.last_taken))
    console.log(medication.last_taken)
    strftime('%F %T', new Date(medication.last_taken))
    // debugger
    return (
        
        
        
                <div className="centered">
                    <Card style={cardStyle} data-id={medication.id}>
                    <Card.Body>
                    <Card.Title style={{ color: 'red'}}> {medication.name} </Card.Title>
                    <Card.Text> Directions:{medication.directions}</Card.Text>
                    <Card.Text>Brand Name: {medication.brand_name}</Card.Text>
                    <Card.Text>Dosage: {medication.medication_dose} </Card.Text>
                    <Card.Text>Description: {medication.medication_description} </Card.Text>
                    <Card.Text>Last Taken NO strftime: {medication.last_taken} </Card.Text>
                    
                    <Card.Text>Last Taken: { strftime('%B %d, %Y %H:%M:%S', new Date(medication.last_taken))} </Card.Text>
        
                    {/* console.log({strftime('%B %d, %Y %H:%M:%S',medication.last_taken)}) */}
                    <DeleteMedicationButton medication={medication}/>
                 
                </Card.Body>

               

               
     
                <NavLink to={`/medications/${medication.id}/edit`}><button className="btn" onClick={()=>editMedication(medication)}>Edit</button></NavLink>

                <Route path={`${match.url}/${medication.id}/edit`} render={routerProps => <EditMedicationForm {...routerProps} medication={medication} key={medication.id}/>}/>
                
            </Card>
            
            
            </div>
           
           
    );  


}






const cardStyle = {
    
    
    width: '18rem', 
    border: '3px solid green', 
    marginBottom: 25, 
    marginTop: 25, 
    paddingBottom: 25, 
    paddingTop: 25, 
    paddingLeft: 25,
    paddingRight: 10,
}
export default connect(null, {  editMedication })(Medication)
 

