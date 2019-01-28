import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View } from 'native-base';

import Homer from '../public/image/Homer';

class BatteryTick extends Component {
	constructor(props) {
		super(props);
	}

	static propTypes = {
		tick: PropTypes.number.isRequired,
	}


	render() {
		let batteryTickImg;

		if( this.props.tick == 0 ) {
			batteryTickImg = <Homer />;
		} else if ( this.props.tick == 1 ) {
			batteryTickImg = <View></View>;
		} else if ( this.props.tick == 2 ) {
			batteryTickImg = <View></View>;
		} else if ( this.props.tick == 3 ) {
			batteryTickImg = <View></View>;
		}

		return (
			<View>
				{batteryTickImg}
			</View>
		);
	}
}

export default BatteryTick
