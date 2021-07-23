import React from 'react'

import { Router, Route, NavLink } from 'react-router-dom';
import NewMedicationForm from './NewMedicationForm';

const Navbar = () => {
    return (
        <div className="navbar">
         {/* <img className="logo" src="/OnTrackEdited.png" alt="OnTrack Logo." /> */}
            <ul className="navlinks-list">

           
                
        <li className="navlink-li"><NavLink className="navlink-item" to="/">Home </NavLink></li>
        <li className="navlink-li"><NavLink className="navlink-item" to="/medications">Medication List</NavLink></li>
        <li className="navlink-li"><NavLink className="navlink-item" to="/medications/new">Add New Medication</NavLink></li>
        
            </ul>
            <Route exact path="/medications/new" component={ NewMedicationForm } />   
        </div>
    )
}

export default Navbar