import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { View } from 'native-base';

import ReactNativeSvgParser from '@target-corp/react-native-svg-parser';

const svgString = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500">
    <defs>
        <radialGradient id="yellow_gradient" cx="250" cy="250" r="250" gradientUnits="userSpaceOnUse">
			<stop offset="0" stop-color="#FFD460"/><stop offset="1" stop-color="#FFF"/>
		</radialGradient>
	</defs>
	<title>자산 20</title><g id="layer_2" data-name="layer 2"><g id="layer_1-2" data-name="layer 1"><circle class="cls-1" cx="250" cy="250" r="250"/></g></g></svg>
`
const cssString = `.cls-1{fill: #FFD460 }`;
// const cssString = `.cls-1{fill: url(#yellow_gradient);}`; // not supported in this package . . .



class Shadow extends Component {
	static propTypes = {
		width: PropTypes.number,
	}

	constructor(props) {
		super(props);

		this.svgNode = ReactNativeSvgParser(svgString, cssString, {width:this.props.width, height:this.props.height, resizeMode: 'contain'});
	}

	render() {
		return (
			<View>
				{ this.svgNode }
			</View>
		);
	}
}

export default Shadow
