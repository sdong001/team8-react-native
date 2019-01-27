import React, { Component } from 'react';
import { Router, Scene, ActionConst } from 'react-native-router-flux';
import Home from './Home';
import Pattern from './Pattern';
import Group from './Group';
import Accident from './Accident';
import Login from './Login';
import Discover from './Discover';


const Routes = () => (
		<Router>
			<Scene key = "root">
		  		<Scene key = "login" component = {Login} navTransparent initial = {true} />
		  		<Scene key = "discover" component = {Discover} navTransparent />
				<Scene key = "home" component = {Home} navTransparent type = {ActionConst.RESET}/>
			 	<Scene key = "pattern" component = {Pattern} title = "Light & Pattern"/>
			 	<Scene key = "group" component = {Group} title = "Group" />
			 	<Scene key = "accident" component = {Accident} title = "Accident" />
	      </Scene>
	   </Router>
   );

export default Routes
