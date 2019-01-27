import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View} from 'native-base';

import { COLOR_PRIMARY } from '../style/common';

class DivideLine extends Component {

	render() {
		return (
			<View style={
				{
					flex:1,
					flexDirection:'row',
					backgroundColor: COLOR_PRIMARY,
					width: '100%',
					height: 1}
				}
			/>
		);
	}
}

export default DivideLine
