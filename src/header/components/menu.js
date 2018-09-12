import React, { Component } from 'react';
import './logo.css';
class Menu extends Component {
    render() {
        return (
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right main-menu">
                    <li className="dropdown">
                        <a href="wall.html">Home</a>
                    </li>
                    <li className="dropdown">
                        <a href="profile.html" id="user-profile">Profile</a>
                    </li>
                    <li className="dropdown">
                        <a href="#" id="log-out">Sign out</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu;