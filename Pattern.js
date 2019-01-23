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

import { vCenterRow, spaceComponent,
 	BREAK_LIGHT, SYNC_LED_TEXT, OUTTER_LED_TEXT, INNER_LED_TEXT
} from './style/common';

type Props = {};

class Pattern extends Component {
	constructor(props) {
		super(props);

		this.state = {
			syncToggle: false,
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
								<Button info>
									<Text>
										Pattern 1
									</Text>
								</Button>
							</Col>
							<Col size={2}>
								<Row>
									<Text>
										Speed
									</Text>
								</Row>
								<Row>
									<Slider style={styles.flatSlider} />
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
					<SwitchCard
						title={BREAK_LIGHT}
						icon="ios-paw"
						cardBkgColor="#FFFFFF" />
					<Card>
						<CardItem>
							<Text>
								Mode
							</Text>
							<NumbericRadioBtnsView
								icons={[
									"ios-paw",
									"ios-paw",
									"ios-paw",
									"ios-paw"
								]} />
						</CardItem>
					</Card>
					<Card>
						<CardItem header bordered>
							<Text>Mode (nubmer)</Text>
						</CardItem>
						<CardItem bordered>
							<Body>
								<View style={{ flex:1, flexDirection:"row", alignSelf: "center"}}>
									<Text>
										Sync
									</Text>
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
										{this.state.syncToggle ? SYNC_LED_TEXT : OUTTER_LED_TEXT}
									</Text>

									<Grid>
										<Col size={1}>
											<Button info>
												<Text>
													Pattern 1
												</Text>
											</Button>
										</Col>
										<Col size={2}>
											<Row>
												<Text>
													Speed
												</Text>
											</Row>
											<Row>
												<Slider style={styles.flatSlider} />
											</Row>
										</Col>
									</Grid>
								</View>

								{this.renderInnerLED(this.state.syncToggle)}

								<Button style={{ alignSelf: "center"}}>
									<Text>Save</Text>
								</Button>
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
