import React, { Component } from 'react';

class Logo extends Component {
    render(){
        return (
            <div className="navbar-header">
            <a className="navbar-brand" href="wall.html">
              <img className="logo" src="../../images/logo-blanco.png" alt="logo" />
            </a>
          </div>
        )
    }
}

export default Logo;