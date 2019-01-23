import React, { Component } from 'react';
import { Router, Scene, ActionConst } from 'react-native-router-flux';
import Home from './Home.js';
import Pattern from './Pattern.js';
import Group from './Group.js';
import Accident from './Accident.js';
import Login from './Login.js';
import Discover from './Discover.js';

class Routes extends Component {

	render() {
		return (
			<Router>
				<Scene key = "root">
			  		<Scene key = "login" component = {Login} navTransparent initial = {true} />
			  		<Scene key = "discover" component = {Discover} title = "Discovering" />
					<Scene key = "home" component = {Home} title = "EIGHT" type={ActionConst.RESET}/>
				 	<Scene key = "pattern" component = {Pattern} title = "Light & Pattern" />
				 	<Scene key = "group" component = {Group} title = "Group" />
				 	<Scene key = "accident" component = {Accident} title = "Accident" />
		      </Scene>
		   </Router>
	   );
	}
}

export default Routes
