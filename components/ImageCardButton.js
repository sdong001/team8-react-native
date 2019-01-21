import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

class ImageCardButton extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired,
		cardBkgColor: PropTypes.string,
	}

	render() {
		return (
			<Card>
				<CardItem style={{backgroundColor: this.props.cardBkgColor}}>
					<Text>{this.props.title}</Text>

				</CardItem>
				<CardItem style={{backgroundColor: this.props.cardBkgColor}}>
					<Icon name={this.props.icon} />
				</CardItem>
			</Card>
		);
	}
}

export default ImageCardButton
