import React, {Component} from 'react';

class Person extends Component{
	render() {
		return (
			<div>
				<h1>Nombre {this.props.name}</h1>
				<p>Apellido {this.props.lastName}</p>
				<p> Edad 55 {this.props.age}</p>
			</div>
		)
	}
} 

export default Person;	