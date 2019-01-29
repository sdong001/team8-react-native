import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Button, Text, Icon, Toast } from 'native-base';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { vCenterRow } from '../style/common';

import NumbericIcon from '../public/icon/NumbericIcon';

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
		onValueChange: PropTypes.function,
	}

	render() {
		return (
			<View style={vCenterRow}>
				<Text style={{fontSize: 25, marginRight: 15}}>
					Mode
				</Text>
				{this.props.icons.map((item, idx) => (
					<TouchableOpacity onPress={() => {
						if( this.state.curEnableBtnIdx != idx ) {
							let changeBtns = this.state.btns;

							changeBtns[idx].btnStyle = styles.selected;
							changeBtns[this.state.curEnableBtnIdx].btnStyle = styles.unSelected;

							this.setState({
								btns: changeBtns,
								curEnableBtnIdx: idx,
							});

							this.props.onValueChange(idx);
						}
					}}>
						<View style={{marginRight: 15}}>
							<NumbericIcon number={idx}/>
						</View>
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
