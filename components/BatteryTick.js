import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BatteryIcon from '../public/icon/BatteryIcon';

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
		return (
			<View>
				<BatteryIcon number={this.props.tick} />
			</View>
		);
	}
}

export default BatteryTick
