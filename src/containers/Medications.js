import { Component } from "react";
import { connect } from "react-redux";
import { fetchAllMeds } from "../redux/actions/index.js";
import Medication from "../components/Medication.js";

class Medications extends Component {
  componentDidMount() {
    this.props.fetchAllMeds();
  }

  render() {
    console.log(this.props);

    const meds = this.props.medications.map((medication, i) => {
      console.log(medication, i);

      console.log(this);

      return <Medication key={i} medication={medication} />;
    });

    return (
      <>
        <h2 className="centered">Medications</h2>

        {meds}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.medicationReducer);

  return {
    medications: state.medicationReducer,
  };
};

export default connect(mapStateToProps, { fetchAllMeds })(Medications);
