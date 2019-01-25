import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

import { Container, Content,
	Button, Text,
	Left, Right,
	Card, CardItem, Icon, Header, View,
	Grid, Col, Row}
	from 'native-base';

import { vCenterRow, spaceComponent } from './style/common';

type Props = {};

const Login = () => {
	const goToHome = () => {
		Actions.home();
	}

	const goToDiscover = () => {
		Actions.discover();
	}

	return (
		<Container>
			<Content contentContainerStyle={styles.content} padder>
				<Grid style={{paddingLeft: 36, paddingRight: 36}}>
					<Row>
						<View style={{flex: 1, justifyContent: 'center'}}>
							<Text style={{textAlign: 'center'}}>
								TEAM EIGHT
							</Text>
						</View>
					</Row>

					<Row style={{flex: 1, flexDirection: 'column'}}>
						<Text style={styles.welcomeText}>
							Login to fully enjoy EIGHT’s features !
						</Text>
						<Button style={{marginTop: 25, marginBottom: 18}} primary block onPress={goToDiscover}>
							<Grid>
								<Col size={3} style={{width: 24, marginLeft:10}}>
									<Icon style={{alignSelf: 'center'}} name="logo-facebook" />
								</Col>
								<Col size={9} style={{justifyContent: 'center'}}>
									<Text style={styles.loginText}>
										Log in with Facebook account
									</Text>
								</Col>
							</Grid>

						</Button>
						<Button primary block>
							<Grid>
								<Col size={3} style={{width: 24, marginLeft:10}}>
									<Icon style={{alignSelf: 'center'}} name="logo-googleplus" />
								</Col>
								<Col size={9} style={{justifyContent: 'center'}}>
									<Text style={styles.loginText}>
										Log in with Google Plus account
									</Text>
								</Col>
							</Grid>
						</Button>
					</Row>
				</Grid>
			</Content>
		</Container>
	);
}

const styles = {
	content: {
		flexGrow: 1,
		justifyContent: 'center'
	},

	welcomeText: {
		fontSize: 17.5,
		textAlign: 'center'
	},

	loginText : {
		fontSize: 15,
		textAlign: 'left'
	},
}

export default Login
