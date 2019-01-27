import React, {Component} from 'react';
import { TouchableOpacity, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'

import { Container, Content,
	Button, Text,
	Left, Right,
	Card, CardItem, Icon, Header, View,
	Grid, Col, Row
} from 'native-base';

var { FBLogin, FBLoginManager } = require('react-native-facebook-login');
// import FacebookLogin from './components/FacebookLogin';

import { vCenterRow, spaceComponent,
	COLOR_PRIMARY, logo }
from './style/common';

type Props = {};

const Login = () => {
	const goToHome = () => {
		Actions.home();
	}

	const goToDiscover = () => {
		Actions.discover();
	}

	return (
		<Container style={{backgroundColor: COLOR_PRIMARY}}>
			<Content contentContainerStyle={styles.content} padder>
				<Grid style={{paddingLeft: 36, paddingRight: 36}}>
					<Row>
						<View style={{flex: 1, justifyContent: 'center'}}>
							<Image style={logo} source={require('./public/image/logo.png')} />
						</View>
					</Row>

					<Row style={{flex: 1, flexDirection: 'column'}}>
						<Text style={[styles.welcomeText, {fontSize: 22.5, color:'#ffffff'}]}>
							Login to fully enjoy EIGHT’s features !
						</Text>
						<Button style={{marginTop: 25, marginBottom: 18, backgroundColor: '#3c5a99'}} primary block onPress={goToDiscover}>
							<Grid>
								<Col size={2} style={{marginLeft:10}}>
									<Icon style={{alignSelf: 'center'}} name="logo-facebook" />
								</Col>
								<Col size={9} style={{justifyContent: 'center'}}>
									<Text style={styles.loginText}>
										Log in with Facebook account
									</Text>
								</Col>
							</Grid>

						</Button>
						<Button primary block style={{backgroundColor: '#d34836'}}>
							<Grid>
								<Col size={2} style={{marginLeft:10}}>
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
		fontSize: 18,
		textAlign: 'left'
	},
}

export default Login
