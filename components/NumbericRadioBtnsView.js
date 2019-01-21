import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Button, Text, Icon, Toast } from 'native-base';
import { StyleSheet } from 'react-native';

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

		this.state = {
			btns: btns
		};
	}

	static propTypes = {
		icons: PropTypes.array.isRequired,
	}

	render() {
		return (
			<View style={vCenterRow}>
				{this.props.icons.map((item, idx) => (
					<Button style={this.state.btns[idx].btnStyle} iconLeft transparent dark key={item + idx}
						onPress={()=> {
							let curStyle = this.state.btns[idx].btnStyle;
							let changeBtns = [];

							curStyle = curStyle == styles.selected ? styles.unSelected : styles.selected;

							this.state.btns.map((newItem, changeIdx) => {
								if( idx == changeIdx ) {
									newItem.btnStyle = curStyle;
								} else {
									newItem.btnStyle = styles.unSelected;
								}
								changeBtns.push(newItem);
							})

							this.setState({
								btns: changeBtns
							});
						}}>
						<Icon name='ios-paw' />
						<Text>{idx}</Text>
					</Button>
				))}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	unSelected: {
		opacity: 0.5,
	},

	selected: {
		opacity: 1,
	}
});

export default NumbericRadioBtnsView
