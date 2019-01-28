import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, Slider, Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux'

import { View, Container, Content, Body, Title,
	Button, Text, Switch,
	Left, Right,
	Card, CardItem, Icon, Header,
	Grid, Col, Row }
	from 'native-base';

import DivideLine from './components/DivideLine';
import NumbericRadioBtnsView from './components/NumbericRadioBtnsView';
import SwitchCard from './components/SwitchCard';

const deviceSize = Dimensions.get('window');

import Light from './public/image/Light';
import Shadow from './public/image/Shadow';

import { flexColumn, flexRow, vCenterRow, spaceComponent, spaceRowTop, spaceRowBottom,
	COLOR_PRIMARY, COLOR_PRIAMRY_LIGHT, COLOR_SECONDARY, MODIFY_MODE,
 	BRIGHTNESS, BREAK_LIGHT, SYNC_LED_TEXT, OUTER_LED_TEXT, INNER_LED_TEXT, PATTERN_CIRCLE, SYNC_BOTH,
	SPPED_ADJUST,
} from './style/common';

type Props = {};

const shadowOriginSize = deviceSize.width / 2;

class Pattern extends Component {
	constructor(props) {
		super(props);

		this.patternBkg = {
			backgroundColor: COLOR_SECONDARY
		};

		this.offBkg = {
			backgroundColor: 'gray'
		};

		this.state = {
			syncToggle: false, // be set from device
			breakToggle: false, // be set from device
			brightness: 0.4, // be set from device
			brightShadowOpa: 0.4,
			outerPattern: 0, // be set from device
			outerBtnBkg: this.patternBkg,
			innerPattern: 0, // be set from device
			innerBtnBkg: this.patternBkg,
			modeIdx: 1,
			modeName: MODIFY_MODE + 1, // be set from device
		};

		this.goToHome.bind(this);
		this.renderInnerLED.bind(this);
	}

	goToHome() {
		Actions.home();
	}

	renderInnerLED(enable) {
		if (!enable) {
			return (
				<View style={styles.adjustView}>
					<DivideLine />

					<View >
						<Text style={styles.titleLED}>
							{INNER_LED_TEXT}
						</Text>

						<Grid>
							<Col size={1}>
								<Button style={[styles.patternBtn, this.state.innerBtnBkg]} primary onPress={() => {
									let changeBkg = this.state.innerPattern + 1 == PATTERN_CIRCLE.length - 1 ? this.offBkg : this.patternBkg;

									let nextPattern = (this.state.innerPattern + 1) % PATTERN_CIRCLE.length;
									this.setState({
										innerPattern: nextPattern,
										innerBtnBkg: changeBkg,
									})
								}}>
									<Text style={styles.patternBtnText}>
										{PATTERN_CIRCLE[this.state.innerPattern]}
									</Text>
								</Button>
							</Col>
							<Col size={2}>
								<Row size={1}>
									<View style={{justifyContent: 'flex-end'}}>
										<Text style={[styles.speedMargin, styles.patternOptions]}>
											{SPPED_ADJUST}
										</Text>
									</View>
								</Row>
								<Row size={2}>
									<Slider value={0.5} style={[styles.flatSlider, styles.speedMargin]} />
								</Row>
							</Col>
						</Grid>
					</View>
				</View>
			);
		} else {
			return ( <View />)
		}
	}

	render() {
		return (
			<Container>
				<Content padder>
					<View style={spaceRowBottom}>
						<View style={{alignItems:'center'}}>
							<View style={{backgroundColor: 'yellow', opacity: this.state.brightShadowOpa, position: 'absolute'}}>
								<Shadow width={deviceSize.width / 2} height={deviceSize.width / 2} />
							</View>
							<Light width={deviceSize.width / 2} height={deviceSize.width / 2} />
						</View>

						<Text style={[styles.brightOptions, {fontSize: 17}]}>{BRIGHTNESS}</Text>
						<Text style={[styles.brightOptions, {fontSize: 23}]}>{Math.floor(this.state.brightShadowOpa * 100)}%</Text>
						<Grid>
							<Col size={1} />
							<Col size={2} >
								<Slider value={this.state.brightness} size={0.5} style={flexRow} onValueChange={(val) => {
									this.setState({
										brightShadowOpa: val,
									});
								}}/>
							</Col>
							<Col size={1} />
						</Grid>
					</View>


					<Grid>
						<Col size={1} />
						<Col size={3}>
							<View style={[spaceRowTop, flexRow, {justifyContent: 'center'}]}>
								<View style={[flexRow, {justifyContent: 'flex-start'}]}>
									<Text style={[styles.brightOptionsTitle, styles.switchMargin]}>{BREAK_LIGHT}</Text>
									<Switch value={this.state.breakToggle}
										onValueChange={
											(value) => {
												this.setState({breakToggle:value});
											}
										} />
								</View>

							</View>

							<View style={[spaceRowTop, flexRow, {justifyContent: 'center'}]}>
								<NumbericRadioBtnsView
									icons={[
										"ios-paw",
										"ios-paw",
										"ios-paw",
										"ios-paw"
									]} onValueChange={(idx) => {
										this.setState({
											modeIdx: idx,
											modeName: MODIFY_MODE + (idx + 1),
										});
									}}/>
							</View>
						</Col>
						<Col size={1} />
					</Grid>
					<Card style={[spaceRowTop, {backgroundColor: COLOR_PRIAMRY_LIGHT}]}>
						<CardItem style={{backgroundColor: COLOR_PRIMARY}} header bordered>
							<View style={[flexRow, {justifyContent: 'center'}]}>
								<Text style={styles.modeText}>{this.state.modeName}</Text>
							</View>
						</CardItem>
						<CardItem style={{backgroundColor: COLOR_PRIAMRY_LIGHT}}>

							<Body>
								<View style={[flexRow, {alignSelf: "center"}]}>
									<Text style={[styles.switchMargin, styles.patternOptions]}>{SYNC_BOTH}</Text>
									<Switch value={this.state.syncToggle}
										onValueChange={
											(value) => {
												this.setState({syncToggle:value});
											}
										} />
								</View>

								<View style={styles.adjustView}>
									<Text style={styles.titleLED}>
										{this.state.syncToggle ? SYNC_LED_TEXT : OUTER_LED_TEXT}
									</Text>

									<Grid>
										<Col size={1}>
											<Button style={[styles.patternBtn, this.state.outerBtnBkg]} primary onPress={() => {
												let changeBkg = this.state.outerPattern + 1 == PATTERN_CIRCLE.length - 1 ? this.offBkg : this.patternBkg;

												let nextPattern = (this.state.outerPattern + 1) % PATTERN_CIRCLE.length;
												this.setState({
													outerPattern: nextPattern,
													outerBtnBkg: changeBkg,
												})
											}}>
												<Text style={styles.patternBtnText}>
													{PATTERN_CIRCLE[this.state.outerPattern]}
												</Text>
											</Button>
										</Col>
										<Col size={2}>
											<Row size={1}>
												<View style={{justifyContent: 'flex-end'}}>
													<Text style={[styles.speedMargin, styles.patternOptions]}>
														{SPPED_ADJUST}
													</Text>
												</View>
											</Row>
											<Row size={2}>
												<Slider value={0.5} style={[styles.flatSlider, styles.speedMargin]} />
											</Row>
										</Col>
									</Grid>
								</View>

								{this.renderInnerLED(this.state.syncToggle)}
							</Body>
						</CardItem>
					</Card>

				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	titleLED : {
		marginTop: 10,
		marginBottom: 10,
		fontSize: 25,
		color: 'white'
	},

	brightOptions: {
		alignSelf: 'center',
		margin: 5
	},

	brightOptionsTitle: {
		fontSize: 25
	},

	speedMargin: {
		marginLeft: 17
	},

	switchMargin: {
		marginRight: 20
	},

	modeText: {
		fontSize: 25,
		color: 'white',
	},

	patternOptions: {
		color: 'white',
		fontSize: 20,
	},

	patternBtn : {
		justifyContent: 'center',
		width: 100,
		height: 100,
	},

	patternBtnText : {
		fontSize: 16,
	},

	adjustView : {
		alignSelf: 'center',
		padding:20,
		width:'100%'
	},

	flatSlider : {
		flex: 1,
		flexDirection: 'row'
	}
});

export default Pattern
