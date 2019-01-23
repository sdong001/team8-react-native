import React, {Component} from 'react';
import { TouchableOpacity, BackHandler } from 'react-native'
import { Actions } from 'react-native-router-flux'

import { View, Container, Content, Body, Title,
	Button, Text,
	Left, Right,
	Card, CardItem, Icon, Header,
	Grid, Col, Row }
	from 'native-base';

import ImageCardButton from './components/ImageCardButton';
import SwitchCard from './components/SwitchCard';
import SeekerCard from './components/SeekerCard';
import NumbericRadioBtnsView from './components/NumbericRadioBtnsView';

import { vCenterRow, spaceComponent, wrapper } from './style/common';

type Props = {};

// <TouchableOpacity onPress={goToGroup}>
// 	<ImageCardButton
// 		title="up left"
// 		icon="md-people"
// 		cardBkgColor="#FFFFFF" />
// </TouchableOpacity>

class Home extends Component {
	constructor(props) {
		super(props);

		this.goToPattern.bind(this);
		this.goToAccident.bind(this);
		this.goToGroup.bind(this);
	}

	goToPattern() {
		Actions.pattern();
	}

	goToAccident() {
		Actions.accident();
	};

	goToGroup() {
		Actions.group();
	};

	componentDidMount() {
		this.homeBackPressHandler = BackHandler.addEventListener('homeBackPress', () => {
	        if (Actions.currentScene === 'home') {
				// doStuff()
				BackHandler.exitApp();
				return true
			}
			return false
		})
	}

	componentWillMount() {
		this.homeBackPressHandler = BackHandler.addEventListener('homeBackPress', () => {
	        if (Actions.currentScene === 'home') {
				// doStuff()
				BackHandler.exitApp();
				return true;
			}
			return false;
		})
	}

	componentWillUnmount() {
		this.homeBackPressHandler.remove();
	}

	render() {
		return (
			<Container>
				<Content padder>
					<Card>
						<CardItem style={{justifyContent:"space-between"}}>
							<Left>
								<Icon active name="md-wifi" />
								<Text>EIGHT_123X</Text>
							</Left>
							<Right>
								<View style={vCenterRow}>
									<Text style={spaceComponent}>86%</Text>
									<Icon style={spaceComponent}
										name="md-battery-charging" />
								</View>
							</Right>
						</CardItem>
					</Card>
					<Grid>
						<Row>
							<Col>
								<Card>
									<CardItem>
										<Text>Light</Text>
									</CardItem>
									<CardItem>
										<Text>...</Text>
									</CardItem>
								</Card>
							</Col>
							<Col>
								<TouchableOpacity onPress={this.goToPattern}>
									<Card>
										<CardItem>
											<Text>Pattern</Text>
										</CardItem>
										<CardItem>
											<Text>...</Text>
										</CardItem>
									</Card>
								</TouchableOpacity>
							</Col>
						</Row>
						<Row>
							<Col>
								<Card style={wrapper}>
									<CardItem>
										<Text>Bluetooth</Text>
									</CardItem>
									<CardItem>
										<Text>...</Text>
									</CardItem>
								</Card>
							</Col>
							<Col>
								<Row>
									<Card style={wrapper}>
										<CardItem>
											<Text>Accident Config</Text>
										</CardItem>
										<CardItem>
											<Text>...</Text>
										</CardItem>
									</Card>
								</Row>
								<Row>
									<Card style={wrapper}>
										<CardItem>
											<Text>Firmware Update</Text>
										</CardItem>
										<CardItem>
											<Text>...</Text>
										</CardItem>
									</Card>
								</Row>
							</Col>
						</Row>
					</Grid>
					<Card>
						<CardItem>
						<NumbericRadioBtnsView
							icons={[
								"ios-paw",
								"ios-paw",
								"ios-paw",
								"ios-paw"
							]} />
						</CardItem>
					</Card>
					<SwitchCard
						title="Switch Card"
						icon="ios-paw"
						cardBkgColor="#FFFFFF" />

					<SeekerCard
						title="Slider Card"
						icon="ios-paw"
						cardBkgColor="#FFFFFF"
					/>
				</Content>
			</Container>
		);
	}
}

export default Home
