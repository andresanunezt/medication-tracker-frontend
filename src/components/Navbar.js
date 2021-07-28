import React from "react";

import { Route, NavLink } from "react-router-dom";
import NewMedicationForm from "../containers/NewMedicationForm";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navlinks-list">
        <li className="navlink-li">
          <NavLink className="navlink-item" to="/">
            Home{" "}
          </NavLink>
        </li>
        <li className="navlink-li">
          <NavLink className="navlink-item" to="/medications">
            Medication List
          </NavLink>
        </li>
        <li className="navlink-li">
          <NavLink className="navlink-item" to="/medications/new">
            Add New Medication
          </NavLink>
        </li>
      </ul>

      <Route exact path="/medications/new" component={NewMedicationForm} />
    </div>
  );
};

export default Navbar;
