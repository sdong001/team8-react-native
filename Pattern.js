import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, Slider } from 'react-native'
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

import { vCenterRow, spaceComponent, spaceRowTop, spaceRowBottom,
	COLOR_PRIMARY, COLOR_PRIAMRY_LIGHT, COLOR_SECONDARY,
 	BRIGHTNESS, BREAK_LIGHT, SYNC_LED_TEXT, OUTER_LED_TEXT, INNER_LED_TEXT, PATTERN_CIRCLE, SYNC_BOTH,
	SPPED_ADJUST,
} from './style/common';

type Props = {};

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
			syncToggle: false,
			breakToggle: false,
			outerPattern: 0,
			outerBtnBkg: this.patternBkg,
			innerPattern: 0,
			innerBtnBkg: this.patternBkg,
			modeName: 'Modify Mode 1',
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
						<Icon style={[styles.brightOptions]} name />
						<Text style={[styles.brightOptions, {fontSize: 17}]}>{BRIGHTNESS}</Text>
						<Text style={[styles.brightOptions, {fontSize: 23}]}>40%</Text>
						<Grid>
							<Col size={1} />
							<Col size={2} >
								<Slider value={0.4} size={0.5} style={
									{
										flex: 1,
										flexDirection: 'row',
									}
								} />
							</Col>
							<Col size={1} />
						</Grid>
					</View>


					<Grid>
						<Col size={1} />
						<Col size={3}>
							<View style={[spaceRowTop, {flex: 1, flexDirection: "row", alignItems: 'center', justifyContent: 'center'}]}>
								<View style={{flex: 1, flexDirection: "row", alignItems: 'center', justifyContent: 'flex-start'}}>
									<Text style={[styles.brightOptionsTitle, styles.switchMargin]}>{BREAK_LIGHT}</Text>
									<Switch value={this.state.breakToggle}
										style={{ transform: [{ scaleX: 1.0 }, { scaleY: 1.0 }] }}
										onValueChange={
											(value) => {
												this.setState({breakToggle:value});
											}
										} />
								</View>

							</View>

							<View style={[spaceRowTop, {flex: 1, flexDirection: "row", alignItems: 'center', justifyContent: 'center'}]}>
								<NumbericRadioBtnsView
									icons={[
										"ios-paw",
										"ios-paw",
										"ios-paw",
										"ios-paw"
									]} />
							</View>
						</Col>
						<Col size={1} />
					</Grid>
					<Card style={[spaceRowTop, {backgroundColor: COLOR_PRIAMRY_LIGHT}]}>
						<CardItem style={{backgroundColor: COLOR_PRIMARY}} header bordered>
							<View style={{flex: 1, flexDirection: "row", alignItems: 'center', justifyContent: 'center'}}>
								<Text style={styles.modeText}>{this.state.modeName}</Text>
							</View>
						</CardItem>
						<CardItem style={{backgroundColor: COLOR_PRIAMRY_LIGHT}}>

							<Body>
								<View style={{flex:1, flexDirection:"row", alignSelf: "center"}}>
									<Text style={[styles.switchMargin, styles.patternOptions]}>{SYNC_BOTH}</Text>
									<Switch value={this.state.syncToggle}
										style={{ transform: [{ scaleX: 1.0 }, { scaleY: 1.0 }] }}
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
