import React from 'react'

import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
         {/* <img className="logo" src="/OnTrackEdited.png" alt="OnTrack Logo." /> */}
            <ul className="navlinks-list">

           
        <li className="navlink-li"><NavLink className="navlink-item" to="/">Home </NavLink></li>
        <li className="navlink-li"><NavLink className="navlink-item" to="/medications">Medication List</NavLink></li>
        <li className="navlink-li"><NavLink className="navlink-item" to="/medications/new">Add New Medication</NavLink></li>
    
            </ul>
        </div>
    )
}

export default Navbar