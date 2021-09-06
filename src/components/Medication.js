import { Card } from "react-bootstrap";
import IncrementButton from "./Button.js";
import EditMedicationForm from "../containers/EditMedicationForm.js";
import { Route, NavLink } from "react-router-dom";
import DeleteMedicationButton from "./DeleteMedicationButton.js";
import { useState } from "react";
// import { editMedication } from "../redux/actions/index.js";

// const Medication = ({ medication, editMedication }) => {
const Medication = ({ medication }) => {
  let strftime = require("strftime");
  return (
    <div className="centered">
      <Card style={cardStyle} data-id={medication.id}>
        <Card.Body>
          <Card.Title style={{ color: "red" }}> {medication.name} </Card.Title>
          <Card.Text>
            {" "}
            Directions:
            {medication.directions}
          </Card.Text>
          <Card.Text>Brand Name: {medication.brand_name}</Card.Text>
          <Card.Text>Dosage: {medication.medication_dose}</Card.Text>
          <Card.Text>
            Description:
            {medication.medication_description}
          </Card.Text>
          {/* <Card.Text>Last Taken NO strftime: {medication.last_taken} </Card.Text>
           */}
          <Card.Text>
            Last Taken:{" "}
            {strftime("%B %d, %Y %H:%M", new Date(medication.last_taken))}{" "}
          </Card.Text>

          <DeleteMedicationButton medication={medication} />
        </Card.Body>
        <NavLink to={`/medications/${medication.id}/edit`}>
          <button className="btn">Edit</button>
        </NavLink>

        <Route
          path={`/medications/${medication.id}/edit`}
          render={(props) => (
            <EditMedicationForm {...props} medication={medication} />
          )}
        />
      </Card>
    </div>
  );
};

const cardStyle = {
  width: "18rem",
  border: "3px solid orangered",
  marginBottom: 25,
  marginTop: 25,
  paddingBottom: 25,
  paddingTop: 25,
  paddingLeft: 25,
  paddingRight: 10,
  backgroundColor: "wheat",
  color: "orangered",
};

export default Medication;
// export default connect(null)(Medication);
