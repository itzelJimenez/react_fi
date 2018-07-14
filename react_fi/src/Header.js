import React, {Component} from 'react';
import Navigation from './Navigation';

class Header extends Component{
	render() {
		return (
			<header id="header">
				{/*icono*/}
				{/*barra de búsquedas*/}
				<Navigation/>
			</header>
		)
	}
} 

export default Header;	