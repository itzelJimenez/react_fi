import React, {Component} from 'react';
import theCrownImage from './the-crown-background.jpg'

class Banner extends Component{
	render() {
		return (
			<div id="Main">
				<div id="Billboard"></div>
				<img id="Hero" src={theCrownImage}/>
			</div>
		)
	}
} 

export default Banner;	