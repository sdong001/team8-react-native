import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { StyleSheet, Slider } from 'react-native';

class SeekerCard extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired,
		cardBkgColor: PropTypes.string,
	}

	render() {
		return (
			<Card>
				<CardItem style={{backgroundColor: this.props.cardBkgColor}}>
					<Icon name={this.props.icon} />
					<Text>{this.props.title}</Text>
					<Slider style={
						{
							flex: 1,
							flexDirection: 'row',
						}
					} />

				</CardItem>
			</Card>
		);
	}
}

export default SeekerCard
