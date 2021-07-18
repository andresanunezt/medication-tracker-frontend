import React from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from 'react-router-dom';
import Medications from './Medications';
import NewMedicationForm from './NewMedicationForm';

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="navlinks-list">

        <Router>
        <li className="navlink-li"><NavLink className="navlink-item" to="/medications">Medication List</NavLink></li>
    
        <Switch>
        <Route exact path="/medications/new" component={ NewMedicationForm } />
        {/* <Route exact path="/medications" component={ Medications } /> */}
    <li className="navlink-li"><NavLink className="navlink-item" to="/medications/new">Add New Medication</NavLink></li>
    <Route exact path="/medications" component={ Medications } />
    {/* <li className="navlink-li"><NavLink className="navlink-item" to="/medications">Medication List</NavLink></li>
     */}
        
     {/* {<NewMedicationForm  */}
 \
    
  
     
     </Switch>
    
     
     </Router>
      
                {/* <li className="navlink-li"><NavLink className="navlink-item" to="/medications">Medication List</NavLink></li> */}
                {/* <li className="navlink-li"><NavLink className="navlink-item" to="/medications/new">Add New Medication</NavLink></li> */}
            </ul>
        </div>
    )
}

export default Navbar