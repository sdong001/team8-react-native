import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { View } from 'native-base';

import ReactNativeSvgParser from '@target-corp/react-native-svg-parser';

const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.46 130"><title>자산 5</title><g id="레이어_2" data-name="레이어 2"><g id="레이어_1-2" data-name="레이어 1"><path class="cls-1" d="M127.37,74a4.57,4.57,0,0,0-3.83.84,49.16,49.16,0,0,1-14.84,8.67,46.5,46.5,0,0,1-16.84,3,48.94,48.94,0,0,1-49-49A51.56,51.56,0,0,1,45.51,21.3,44.82,44.82,0,0,1,53.52,7a4.26,4.26,0,0,0-.67-6A4.58,4.58,0,0,0,49,.13,67.23,67.23,0,0,0,13.67,23.8,66,66,0,1,0,130.21,79.32,4,4,0,0,0,127.37,74Zm-25.51,34.85A57.39,57.39,0,0,1,9,63.81,56.38,56.38,0,0,1,20.84,29,57.41,57.41,0,0,1,40,13a57.48,57.48,0,0,0-2.33,5.67,55.47,55.47,0,0,0-3.17,19A57.5,57.5,0,0,0,92,95.16a55.92,55.92,0,0,0,19.84-3.5C114,90.82,116.2,90,118.2,89A60.63,60.63,0,0,1,101.86,108.83Z"/></g></g></svg>
`
const cssString = `.cls-1{fill:#ffd460;}`;



class LightOff extends Component {

	constructor(props) {
		super(props);

		this.svgNode = ReactNativeSvgParser(svgString, cssString, {width:36, height:36, resizeMode: 'contain'});
	}

	render() {
		return (
			<View>
				{ this.svgNode }
			</View>
		);
	}
}

export default LightOff
