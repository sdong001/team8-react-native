import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { View } from 'native-base';

import ReactNativeSvgParser from '@target-corp/react-native-svg-parser';

const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 849.95 195.1">
<defs></defs>
<title>자산 3</title>
<g id="레이어_2" data-name="레이어 2">
<g id="레이어_1-2" data-name="레이어 1">
<path class="cls-1" d="M160.2,191.72H20V2.53H157.67V40.26H57.16v31H114V109H57.16V154h103Z"/><path class="cls-1" d="M252.54,191.72H214.82V2.53h37.72Z"/>
<path class="cls-1" d="M462.85,98.82q0,44.76-20.56,70.52T385.14,195.1Q346,195.1,324.61,167T303.22,97.13q0-43.63,23.08-70.38T386.55,0a80.19,80.19,0,0,1,41.11,10.84,72.45,72.45,0,0,1,28.43,30l-52,19.57c-8.27-14.26-2.08-23-19-23q-20.26,0-32.23,16.19t-12,43.5q0,27.87,12,44.06t32.8,16.47q25.6-.57,32.65-22.24H385.14V98.82Z"/>
<path class="cls-1" d="M658.79,191.72H621.91V109h-78v82.77H506.76V3.1h37.17V71.23h78V3.1h36.88Z"/><path class="cls-1" d="M850,40.26H798.43V191.72h-36.6V40.26H709.75V2.53H850Z"/>
<path class="cls-2" d="M140.2,191.72H0V2.53H137.67V40.26H37.16v31H94V109H37.16V154h103Z"/><path class="cls-2" d="M232.54,191.72H194.82V2.53h37.72Z"/>
<path class="cls-2" d="M442.85,98.82q0,44.76-20.56,70.52T365.14,195.1Q326,195.1,304.61,167T283.22,97.13q0-43.63,23.08-70.38T366.55,0a80.19,80.19,0,0,1,41.11,10.84c12.38,7.23,25.88,22.79,32.46,35.55l-36,14c-8.27-14.26-22.08-23-39-23q-20.26,0-32.23,16.19t-12,43.5q0,27.87,12,44.06t32.8,16.47q25.6-.57,32.65-22.24H365.14V98.82Z"/>
<path class="cls-2" d="M638.79,191.72H601.91V109h-78v82.77H486.76V3.1h37.17V71.23h78V3.1h36.88Z"/><path class="cls-2" d="M830,40.26H778.43V191.72h-36.6V40.26H689.75V2.53H830Z"/>
</g>
</g>
</svg>
`
const cssString = `.cls-1{fill:#ffd460;} .cls-2{fill:#fff;}`;



class Logo extends Component {
	static propTypes = {
		width: PropTypes.number,
	}

	constructor(props) {
		super(props);

		this.svgNode = ReactNativeSvgParser(svgString, cssString, {width:this.props.width, resizeMode: 'contain'})
	}

	render() {
		return (
			<View>
				{ this.svgNode }
			</View>
		);
	}
}

export default Logo
