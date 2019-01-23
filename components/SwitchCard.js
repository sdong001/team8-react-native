import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Header, Content, Card, CardItem, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Switch } from 'react-native';

class SwitchCard extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired,
		cardBkgColor: PropTypes.string,
	}

	constructor(props) {
		super(props);

		this.state = {
			toggle: false,
		};
	}

	render() {
		return (
			<Card>
				<CardItem style={{justifyContent:"space-between", backgroundColor: this.props.cardBkgColor}}>
					<Left>
						<Icon name={this.props.icon} />
						<Text>{this.props.title}</Text>
					</Left>
					<Right>
						<Switch value={this.state.toggle}
							style={{ transform: [{ scaleX: 1.0 }, { scaleY: 1.0 }] }}
							onValueChange={
								(value) => {
									this.setState({toggle:value});
								}
							} />
					</Right>
				</CardItem>
			</Card>
		);
	}
}

export default SwitchCard
