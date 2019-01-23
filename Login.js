import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

import { Container, Content,
	Button, Text,
	Left, Right,
	Card, CardItem, Icon, Header,
	Grid, Col, Row}
	from 'native-base';

import { vCenterRow, spaceComponent } from './style/common';

type Props = {};

const Login = () => {
	const goToHome = () => {
		Actions.home();
	}

	return (
		<Container>
			<Content padder>
				<Card>
					<CardItem style={{flex: 1, flexDirection: "column"}}>
						<Text style={spaceComponent}>
							TEAM EIGHT
						</Text>
						<Button style={spaceComponent} primary block onPress={goToHome}>
							<Text>
								Sign in with google
							</Text>
						</Button>
						<Button style={spaceComponent} primary block>
							<Text>
								Sign in with naver
							</Text>
						</Button>
						<Button style={spaceComponent} primary block>
							<Text>
								Sign in with facebook
							</Text>
						</Button>
					</CardItem>
				</Card>
			</Content>
		</Container>
	);
}

export default Login
