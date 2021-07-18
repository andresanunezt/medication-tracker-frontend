import React from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import NewMedicationForm from './NewMedicationForm';

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="navlinks-list">

        <Router>
        <Switch>
        <Route exact path="/medications/new" component={ NewMedicationForm } />
    
    <li className="navlink-li"><NavLink className="navlink-item" to="/medications/new">Add New Medication</NavLink></li>
      {/* <Medications/>
      
     <NewMedicationForm /> */}
     </Switch>
     </Router>
      
                <li className="navlink-li"><NavLink className="navlink-item" to="/medications">Medication List</NavLink></li>
                {/* <li className="navlink-li"><NavLink className="navlink-item" to="/medications/new">Add New Medication</NavLink></li> */}
            </ul>
        </div>
    )
}

export default Navbar