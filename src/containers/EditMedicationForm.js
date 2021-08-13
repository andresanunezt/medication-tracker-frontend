import { Component } from "react";
import { connect } from "react-redux";
import { editMedication } from "../redux/actions/index.js";
import DateTimePicker from "react-datetime-picker";

class EditMedicationForm extends Component {
  constructor() {
    super();

    this.state = { id: "", last_taken: "" };
  }

  componentDidMount() {
    this.setState({
      id: this.props.medication.id,
      last_taken: new Date(),
    });

    console.log(this.props);
    console.log(this.state);
  }

  submitHandler = (e) => {
    e.preventDefault();

    console.log(this.state);
    console.log(this.props);

    this.props.editMedicationDispatcher(this.state);
    this.props.history.push("/medications");
  };

  onChangeHandler = (e) => {
    console.log(e);

    this.setState({ last_taken: e });

    console.log(this.props);
    console.log(this.state);
  };

  strftime = require("strftime");

  render() {
    console.log(this.props);

    return (
      <>
        <h5> Medication: {this.props.medication.name}</h5>
        <h5> Dosage: {this.props.medication.medication_dose}</h5>
        <h5>
          {" "}
          Last Taken On:{" "}
          {this.strftime(
            "%B %d, %Y %H:%M",
            new Date(this.props.medication.last_taken)
          )}{" "}
        </h5>

        <form onSubmit={this.submitHandler}>
          <DateTimePicker
            onChange={this.onChangeHandler}
            value={this.state.last_taken}
            name="last_taken"
          />

          {/* <input type="text" placeholder="Last Taken" value={this.state.last_taken} onChange={this.onChangeHandler}
                    name="last_taken"
                /> */}

          <br></br>
          <br></br>

          <input type="submit" value="update" />
        </form>

        <h5> Update the time you last took your medication! </h5>
      </>
    );
  }
}

export default connect(null, {
  editMedicationDispatcher: editMedication,
})(EditMedicationForm);
