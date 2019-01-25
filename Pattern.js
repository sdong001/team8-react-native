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
 	BRIGHTNESS, BREAK_LIGHT, SYNC_LED_TEXT, OUTER_LED_TEXT, INNER_LED_TEXT, PATTERN_CIRCLE, SYNC_BOTH
} from './style/common';

type Props = {};

class Pattern extends Component {
	constructor(props) {
		super(props);

		this.state = {
			syncToggle: false,
			breakToggle: false,
			outerPattern: 0,
			innerPattern: 0
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
								<Button style={styles.patternBtn} primary onPress={() => {
									let nextPattern = (this.state.innerPattern + 1) % PATTERN_CIRCLE.length;
									this.setState({
										innerPattern: nextPattern
									})
								}}>
									<Text>
										{PATTERN_CIRCLE[this.state.innerPattern]}
									</Text>
								</Button>
							</Col>
							<Col size={2}>
								<Row size={1}>
									<View style={{justifyContent: 'flex-end'}}>
										<Text style={styles.speedMargin}>
											Speed
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
						<Icon style={{alignSelf: 'center', margin: 5}} name />
						<Text style={{alignSelf: 'center', margin: 5}}>{BRIGHTNESS}</Text>
						<Text style={{alignSelf: 'center', margin: 5}}>50%</Text>
						<Grid>
							<Col size={1} />
							<Col size={2} >
								<Slider value={0.5} size={0.5} style={
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
								<View style={{flex: 1, flexDirection: "row", alignItems: 'flex-start', justifyContent: 'flex-start'}}>
									<Text style={styles.switchMargin}>{BREAK_LIGHT}</Text>
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
					<Card style={spaceRowTop}>
						<CardItem style={{backgroundColor: 'gray'}} header bordered>
							<View style={{flex: 1, flexDirection: "row", alignItems: 'center', justifyContent: 'center'}}>
								<Text>Modify Mode 1</Text>
							</View>
						</CardItem>
						<CardItem bordered>
							<Body>
								<View style={{ flex:1, flexDirection:"row", alignSelf: "center"}}>
									<Text styles={styles.switchMargin}>{SYNC_BOTH}     </Text>
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
											<Button style={styles.patternBtn} primary onPress={() => {
												let nextPattern = (this.state.outerPattern + 1) % PATTERN_CIRCLE.length;
												this.setState({
													outerPattern: nextPattern
												})
											}}>
												<Text>
													{PATTERN_CIRCLE[this.state.outerPattern]}
												</Text>
											</Button>
										</Col>
										<Col size={2}>
											<Row size={1}>
												<View style={{justifyContent: 'flex-end'}}>
													<Text style={styles.speedMargin}>
														Speed
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
	},

	speedMargin: {
		marginLeft: 17
	},

	switchMargin: {
		marginRight: 20
	},

	patternBtn : {
		justifyContent: 'center',
		width: 100,
		height: 100,
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
