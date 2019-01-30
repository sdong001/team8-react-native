import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { View } from 'native-base';

import ReactNativeSvgParser from '@target-corp/react-native-svg-parser';

const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 73"><title>discoverable</title><g id="레이어_2" data-name="레이어 2"><g id="레이어_1-2" data-name="레이어 1"><ellipse class="cls-1" cx="33" cy="36.5" rx="33" ry="36.5"/><path class="cls-2" d="M40.54,37.74l5,5a13.76,13.76,0,0,0,1-5,14,14,0,0,0-.93-5ZM52,26.3,49.25,29a18.68,18.68,0,0,1,2.11,8.68,19,19,0,0,1-2.11,8.68L51.84,49A21.37,21.37,0,0,0,52,26.3Zm-7.36,1.44L32.28,15.41H30.12V31.8l-9.91-9.92-3.05,3.05L29.23,37,17.16,49.07l3.05,3,9.91-9.92V58.59h2.16L44.61,46.26,35.32,37ZM34.44,24.4l4.06,4.06-4.06,4.06ZM38.5,47,34.44,51V42.92Z"/></g></g></svg>
`
const cssString = `.cls-1{fill:#011a30;} .cls-2{fill:#fff;}`;



class Discoverable extends Component {
	constructor(props) {
		super(props);

		this.svgNode = ReactNativeSvgParser(svgString, cssString, {width:24, height:24, resizeMode: 'contain'});
	}

	render() {
		return (
			<View>
				{ this.svgNode }
			</View>
		);
	}
}

export default Discoverable
