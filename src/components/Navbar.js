import React from 'react'
// import { BrowserRouter as Router, Switch, Route, NavLink, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Medications from '../containers/Medications';
import NewMedicationForm from './NewMedicationForm';
import Home from './Home'
const Navbar = () => {
    return (
        <div className="navbar">
         <img className="logo" src="/OnTrack.png" alt="OnTrack Logo." />
            <ul className="navlinks-list">

           
        <li className="navlink-li"><NavLink className="navlink-item" to="/">Home </NavLink></li>
        <li className="navlink-li"><NavLink className="navlink-item" to="/medications">Medication List</NavLink></li>
        <li className="navlink-li"><NavLink className="navlink-item" to="/medications/new">Add New Medication</NavLink></li>
    
            </ul>
        </div>
    )
}

export default Navbar