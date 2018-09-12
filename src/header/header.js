import React, { Component } from 'react';
import Logo from './components/logo';
import Menu from './components/menu';
import './header.css'

class Header extends Component {
	render() {
		return (
				<div className="header">
					<div className="navbar navbar-default navbar-fixed-top menu">
						<div className="container">
							<Logo />
							<Menu />
						</div>
					</div>
			</div>
		)
	}
}

export default Header;