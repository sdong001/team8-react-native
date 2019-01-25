import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Button, Text, Icon, Toast } from 'native-base';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { vCenterRow } from '../style/common';

class NumbericRadioBtnsView extends Component {

	constructor(props) {
		super(props);

		let btns = [];
		this.props.icons.map((item, idx) => {
			btns.push({
				btnStyle: styles.unSelected
			});
		});

		btns[0].btnStyle =  styles.selected;

		this.state = {
			btns: btns,
			curEnableBtnIdx: 0
		};
	}

	static propTypes = {
		icons: PropTypes.array.isRequired,
	}

	render() {
		return (
			<View style={vCenterRow}>
				<Text>
					Mode
				</Text>
				{this.props.icons.map((item, idx) => (
					<TouchableOpacity onPress={() => {
						console.log('idx', idx);
						console.log('this.state.curEnableBtnIdx', this.state.curEnableBtnIdx);
						if( this.state.curEnableBtnIdx != idx ) {
							let changeBtns = this.state.btns;

							changeBtns[idx].btnStyle = styles.selected;
							changeBtns[this.state.curEnableBtnIdx].btnStyle = styles.unSelected;

							this.setState({
								btns: changeBtns,
								curEnableBtnIdx: idx,
							});
						}
					}}>
						<Text style={this.state.btns[idx].btnStyle}>{idx}</Text>
					</TouchableOpacity>
				))}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	unSelected: {
		margin: 20,
		opacity: 0.5,
	},

	selected: {
		margin: 20,
		opacity: 1,
	}
});

export default NumbericRadioBtnsView
