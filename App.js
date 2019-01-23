import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Routes from './Routes.js'
import {name as appName} from './app.json';

export default class App extends Component {
	render() {
		return (
			<Routes />
		);
	}
}
