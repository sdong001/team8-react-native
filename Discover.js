import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

import { View, Container, Content, Body,
	Button, Text, List, ListItem, Thumbnail,
	Left, Right,
	Card, CardItem, Icon, Header,
	Grid, Col,}
	from 'native-base';

import { vCenterRow, spaceComponent } from './style/common';

type Props = {};

const Discover = () => {
	const goToHome = () => {
		Actions.home();
	}

	return (
		<Container>
			<Content padder>
				<List>
					<ListItem thumbnail>
						<Left>
							<Thumbnail square source={{ uri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' }} />
						</Left>
						<Body>
							<Text>EIGHT_1234</Text>
							<Text note numberOfLines={1}>Its time to build a difference . .</Text>
						</Body>
						<Right>
							<Button transparent onPress={goToHome}>
								<Text>Connect</Text>
							</Button>
						</Right>
					</ListItem>
					<ListItem thumbnail>
						<Left>
							<Thumbnail square source={{ uri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' }} />
						</Left>
						<Body>
							<Text>EIGHT_3453</Text>
							<Text note numberOfLines={1}>Its time to build a difference . .</Text>
						</Body>
						<Right>
							<Button transparent>
								<Text>Connect</Text>
							</Button>
						</Right>
					</ListItem>
					<ListItem thumbnail>
						<Left>
							<Thumbnail square source={{ uri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' }} />
						</Left>
						<Body>
							<Text>EIGHT_6931</Text>
							<Text note numberOfLines={1}>Its time to build a difference . .</Text>
						</Body>
						<Right>
							<Button transparent>
								<Text>Connect</Text>
							</Button>
						</Right>
					</ListItem>
				</List>
			</Content>
		</Container>
	);
}

export default Discover
