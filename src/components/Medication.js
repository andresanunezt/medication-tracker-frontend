

import { Component } from "react";

import { Card } from 'react-bootstrap';

class Medication extends Component  {



    render() { 
   
        console.log(this.props)
    return (
        
        // <div>
        //         <h1> name: {this.props.medication.name}</h1>
        //         <h3> Directions:{this.props.medication.directions}</h3>
        //         <h3>Brand Name: {this.props.medication.brand_name}</h3>
        //         <h3>Dosage: {this.props.medimedication_dose} </h3>
        //         <h3>Description: {this.props.medication.medication_description} </h3>
        //         <h3>Last Taken: {this.props.medication.last_taken} </h3>
        //     </div>

                    <Card style={cardStyle} data-id={this.props.key}>
                     <Card.Body>
                    <Card.Title style={{ color: 'red'}}> {this.props.medication.name} </Card.Title>
                    <Card.Text> Directions:{this.props.medication.directions}</Card.Text>
                    <Card.Text>Brand Name: {this.props.medication.brand_name}</Card.Text>
                    <Card.Text>Dosage: {this.props.medimedication_dose} </Card.Text>
                    <Card.Text>Description: {this.props.medication.medication_description} </Card.Text>
                    <Card.Text>Description: {this.props.medication.last_taken} </Card.Text>
                </Card.Body>
            </Card>

      
           
      
    );  
};

}

const cardStyle = {
    width: '18rem', 
    border: 'solid', 
    marginBottom: 50, 
    marginTop: 50, 
    paddingBottom: 25, 
    paddingTop: 25, 
    paddingLeft: 50 
}

export default Medication

