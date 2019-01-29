import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { View } from 'native-base';

import ReactNativeSvgParser from '@target-corp/react-native-svg-parser';

const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180"><title>자산 4</title><g id="레이어_2" data-name="레이어 2"><g id="레이어_1-2" data-name="레이어 1"><path class="cls-1" d="M121.85,58.15A45.32,45.32,0,0,0,90,44.84,44.32,44.32,0,0,0,58.15,58.15a45.16,45.16,0,0,0,31.85,77,44.32,44.32,0,0,0,31.85-13.31A45.32,45.32,0,0,0,135.16,90,44.32,44.32,0,0,0,121.85,58.15ZM113.3,113.3A33.32,33.32,0,1,1,122.8,90,32.91,32.91,0,0,1,113.3,113.3Z"/><path class="cls-1" d="M173.76,83.64H155.5a6.43,6.43,0,0,0-5.63,3.18,6.25,6.25,0,0,0,5.41,9.3h18.26a6.42,6.42,0,0,0,5.63-3.18A6.25,6.25,0,0,0,173.76,83.64Z"/><path class="cls-1" d="M83.92,155.5v18a6.42,6.42,0,0,0,3.18,5.63,6.25,6.25,0,0,0,9.3-5.41V155.28a6.25,6.25,0,0,0-9.3-5.41A6.43,6.43,0,0,0,83.92,155.5Z"/><path class="cls-1" d="M153.47,144.91l-13.08-13.07a6,6,0,0,0-8.55,8.55l13.07,13.08a6.05,6.05,0,0,0,8.56-8.56Z"/><path class="cls-1" d="M83.92,6.46v18a6.43,6.43,0,0,0,3.18,5.63,6.25,6.25,0,0,0,9.3-5.41V6.24A6.25,6.25,0,0,0,87.1.83,6.42,6.42,0,0,0,83.92,6.46Z"/><path class="cls-1" d="M153.7,26.53a6,6,0,0,0-8.55,0L132.07,39.61a6,6,0,0,0,8.56,8.55L153.7,35.09A6,6,0,0,0,153.7,26.53Z"/><path class="cls-1" d="M24.72,83.64H6.34a6.24,6.24,0,1,0-.1,12.48H24.5a6.43,6.43,0,0,0,5.63-3.18A6.25,6.25,0,0,0,24.72,83.64Z"/><path class="cls-1" d="M47.93,131.84a6,6,0,0,0-8.56,0L26.3,144.91a6,6,0,0,0,8.55,8.56l13.08-13.08A6,6,0,0,0,47.93,131.84Z"/><path class="cls-1" d="M47.93,39.61,34.85,26.53a6,6,0,0,0-8.55,8.56L39.37,48.16a6,6,0,0,0,8.56-8.55Z"/></g></g></svg>
`
const cssString = `.cls-1{fill:#ffd460;}`;



class LightOn extends Component {

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

export default LightOn
