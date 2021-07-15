

import { Component } from "react";

// import { Card } from 'react-bootstrap';

class Medication extends Component  {



    render() { 
   
        console.log(this.props)
    return (
        
        <div>
                <h1> name: {this.props.name}</h1>
                <h3> Directions:{this.props.directions}</h3>
                <h3>Brand Name: {this.props.brand_name}</h3>
                <h3>Dosage: {this.props.medication_dose} </h3>
                <h3>Description: {this.props.medication_description} </h3>
                <h3>Description: {this.props.last_taken} </h3>
            </div>

            //         <Card style={cardStyle} data-id={this.props.user_id}>
            //          <Card.Body>
            //         <Card.Title style={{ color: 'red'}}>{this.props.name}</Card.Title>
            //         <Card.Text> Directions:{this.props.directions}</Card.Text>
            //         <Card.Text>Brand Name: {this.props.brand_name}</Card.Text>
            //         <Card.Text>Dosage: {this.props.medication_dose} </Card.Text>
            //         <Card.Text>Description: {this.props.medication_description} </Card.Text>
            //         <Card.Text>Description: {this.props.last_taken} </Card.Text>
            //     </Card.Body>
            // </Card>

      
           
      
    );  
};

}

// const cardStyle = {
//     width: '18rem', 
//     border: 'solid', 
//     marginBottom: 50, 
//     marginTop: 50, 
//     paddingBottom: 25, 
//     paddingTop: 25, 
//     paddingLeft: 50 
// }

export default Medication

