import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { View } from 'native-base';

import ReactNativeSvgParser from '@target-corp/react-native-svg-parser';

const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 347.83"><title>자산 19</title><g id="레이어_2" data-name="레이어 2"><g id="레이어_1-2" data-name="레이어 1"><path class="cls-1" d="M141.31,315.22H108.7a5.44,5.44,0,0,0-5.44,5.43v5c0,11.23,9.14,21.39,20.34,22.09a21.76,21.76,0,0,0,23.14-21.69v-5.44A5.43,5.43,0,0,0,141.31,315.22Z"/><path class="cls-2" d="M125,315.22H108.7a5.44,5.44,0,0,0-5.44,5.43v5.44A21.77,21.77,0,0,0,125,347.83V315.22Z"/><path class="cls-3" d="M210.58,33.9A124,124,0,0,0,117,.26C53.42,4.21,2.05,57.26.06,121A124.6,124.6,0,0,0,64.83,234.55,32.39,32.39,0,0,1,81.52,263v41.38a21.74,21.74,0,0,0,21.74,21.74h43.48a21.74,21.74,0,0,0,21.74-21.74V263a32.54,32.54,0,0,1,16.82-28.49A125,125,0,0,0,210.58,33.9Z"/><circle class="cls-4" cx="125.05" cy="124.74" r="86.96"/><path class="cls-5" d="M144.06,157.35c-7.22,0-10.92-4.22-13.61-7.29-2.37-2.71-3.31-3.58-5.43-3.58s-3,.87-5.41,3.57c-2.54,2.91-6.37,7.3-13.6,7.3S95,153,92.42,150.05c-2.36-2.7-3.3-3.57-5.41-3.57a5.44,5.44,0,0,1,0-10.87c7.22,0,11.06,4.39,13.59,7.29,2.37,2.7,3.31,3.58,5.41,3.58s3-.88,5.42-3.58c2.53-2.9,6.37-7.29,13.59-7.29s10.92,4.21,13.61,7.28c2.37,2.71,3.31,3.59,5.43,3.59s3.06-.88,5.43-3.58c2.54-2.9,6.38-7.29,13.61-7.29a5.44,5.44,0,0,1,0,10.87c-2.12,0-3.06.87-5.44,3.58C155.12,153,151.28,157.35,144.06,157.35Z"/><path class="cls-2" d="M108.75,260.61a5.45,5.45,0,0,1-5.31-4.28l-27.17-125A5.43,5.43,0,1,1,86.89,129l27.17,125a5.43,5.43,0,0,1-4.15,6.47A5.16,5.16,0,0,1,108.75,260.61Z"/><path class="cls-2" d="M141.36,260.61a5.22,5.22,0,0,1-1.16-.13,5.43,5.43,0,0,1-4.15-6.47l27.17-125a5.44,5.44,0,1,1,10.63,2.31l-27.18,125A5.44,5.44,0,0,1,141.36,260.61Z"/><path class="cls-6" d="M80.59,255.44a32.48,32.48,0,0,1,.93,7.53v41.38a21.74,21.74,0,0,0,21.74,21.74h43.48a21.74,21.74,0,0,0,21.74-21.74V263a32.49,32.49,0,0,1,.94-7.53Z"/><path class="cls-1" d="M125,255.44H80.59a32.48,32.48,0,0,1,.93,7.53v41.38a21.74,21.74,0,0,0,21.74,21.74H125Z"/><rect class="cls-1" x="125" y="271.74" width="43.48" height="10.87"/><rect class="cls-1" x="125" y="293.48" width="43.48" height="10.87"/><rect class="cls-2" x="81.52" y="271.74" width="43.48" height="10.87"/><rect class="cls-2" x="81.52" y="293.48" width="43.48" height="10.87"/></g></g></svg>
`
const cssString = `.cls-1{fill:#868491;} .cls-2{fill:#5c546a;} .cls-3{fill:#ffcd00;} .cls-4{fill:#ffe671;} .cls-5{fill:#fff;}.cls-6{fill:#b4b6bc;}`;



class Light extends Component {
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

export default Light
