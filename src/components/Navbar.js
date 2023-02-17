import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <h2>Title of App</h2>
            <ul>
                <li><NavLink className="navLink" to='/'>Home</NavLink></li>
                <li><NavLink className="navLink" to='/about'>About</NavLink></li>
                <li ><NavLink className="navLink" to='/contact'>Contact</NavLink></li>
            </ul>
        </nav>
    )
}