import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { View } from 'native-base';

import ReactNativeSvgParser from '@target-corp/react-native-svg-parser';

const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 73"><title>autoconnect</title><g id="레이어_2" data-name="레이어 2"><g id="레이어_1-2" data-name="레이어 1"><ellipse class="cls-1" cx="33" cy="36.5" rx="33" ry="36.5"/><path class="cls-2" d="M22.71,36.85l-4.44-4.44-4.45,4.44,4.45,4.45Zm23.51-9.38L33.54,14.78H31.31V31.64l-10.2-10.2L18,24.58,30.4,37,18,49.42l3.13,3.14,10.2-10.2V59.22h2.23L46.22,46.53,36.67,37ZM35.76,23.14l4.18,4.18L35.76,31.5Zm4.18,23.25-4.18,4.17V42.21Zm9.44-14-4.45,4.44,4.45,4.45,4.44-4.45Z"/></g></g></svg>
`
const cssString = `.cls-1{fill:#011a30;} .cls-2{fill:#fff;}`;



class Autoconnect extends Component {
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

export default Autoconnect
