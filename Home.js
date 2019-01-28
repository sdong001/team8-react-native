import React, {Component} from 'react';
import { TouchableOpacity, BackHandler, Switch, StyleSheet, Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux'

import { View, Container, Content, Body, Title,
	Button, Text,
	Left, Right,
	Card, CardItem, Icon, Header, Item, Input,
	Grid, Col, Row }
	from 'native-base';
import Dialog, { DialogTitle, DialogButton, DialogContent } from 'react-native-popup-dialog';
import ProgressCircle from 'react-native-progress-circle';
import SvgUri from 'react-native-svg-uri';

import DivideLine from './components/DivideLine';
import BatteryTick from './components/BatteryTick';

import { COLOR_PRIMARY, COLOR_SECONDARY, COLOR_PRIMARY_DARK, COLOR_PRIAMRY_LIGHT,
 	DIALOG_OK, DIALOG_CLOSE,
	APP_NAME, AUTO_CONNECT, DISCOVERABLE, LIGHT_ON, LIGHT_OFF,
	HOME_LIGHT_PATTERN, HOME_GROUP_SYNC, HOME_ACCIDENT_ALERT, HOME_FIRMWARE_UPDATE, FIRMWARE_NEED_UPDATE,
	FIRMWARE_UPDATE_VER, FIRMWARE_CURRENT_VER, FIRMWARE_UPDATE_WAITING,
	flexColumn, flexRow, vCenterRow, spaceComponent }
from './style/common';

import Homer from './public/image/Homer';

const deviceSize = Dimensions.get('window');

type Props = {};

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			updateDlgVisible: false,
			updatePercent: 88, // be set from device
			autoConnectToggle : false, // be set from device
			discoverableToggle: false, // be set from device
			lightToggle: false, // be set from device
			lightSync: false, // be set from device
			lightState: LIGHT_OFF, // be set from device
			updateVersion: '00.01', // be set from device
			currentVersion: '00.00', // be set from device
		};

		this.goToPattern.bind(this);
		this.goToAccident.bind(this);
		this.showUpdateDlg.bind(this);
	}

	goToPattern() {
		Actions.pattern();
	}

	goToAccident() {
		Actions.accident();
	}

	showUpdateDlg() {
		this.setState({
			updateDlgVisible: true
		});
	}

	componentDidMount() {
		this.homeBackPressHandler = BackHandler.addEventListener('homeBackPress', () => {
	        if (Actions.currentScene === 'home') {

				if( this.state.updateDlgVisible ) {
					this.setState({
						updateDlgVisible: false
					});
				} else {
					BackHandler.exitApp();
				}

				return true
			}
			return false
		})
	}

	componentWillMount() {
		this.homeBackPressHandler = BackHandler.addEventListener('homeBackPress', () => {
	        if (Actions.currentScene === 'home') {

				if( this.state.updateDlgVisible ) {
					this.setState({
						updateDlgVisible: false
					});
				} else {
					BackHandler.exitApp();
				}
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
					<View style={{flex: 1, flexDirection: 'row'}}>
						<Text style={styles.titleText}>
							{APP_NAME}
						</Text>
						<Grid style={{marginLeft: 12}}>
							<Row></Row><Row></Row>
							<Row><DivideLine /></Row>
						</Grid>
					</View>
					<Card>
						<CardItem style={{justifyContent:"space-between", backgroundColor: COLOR_PRIMARY}}>
							<Grid>
								<Col size={3}>
									<Item style={{backgroundColor: COLOR_SECONDARY, borderColor: COLOR_SECONDARY}}regular>
										<Input style={styles.deviceInput} />
										<Icon style={[spaceComponent, {color: 'white', backgroundColor: COLOR_SECONDARY}]}
											name="md-create" />
									</Item>
									<Grid style={{marginLeft: 10, marginTop: 5}}>
										<Row>
											<Icon style={spaceComponent}
												name="md-create" />
											<Col style={vCenterRow}>
												<Text style={styles.bluetoothOptionsText}>{AUTO_CONNECT}</Text>
											</Col>
											<Col style={vCenterRow}>
												<Switch value={this.state.autoConnectToggle}
													onValueChange={
														(value) => {
															this.setState({autoConnectToggle:value});
														}
													} />
											</Col>
										</Row>

										<Row>
											<Icon style={spaceComponent}
												name="md-create" />
											<Col style={vCenterRow}>
												<Text style={styles.bluetoothOptionsText}>{DISCOVERABLE}</Text>
											</Col>
											<Col style={vCenterRow}>
												<Switch value={this.state.discoverableToggle}
													onValueChange={
														(value) => {
															this.setState({discoverableToggle:value});
														}
													} />
											</Col>
										</Row>
									</Grid>
								</Col>
								<Col size={1}>
									<View style={{alignItems: 'center'}}>
										<BatteryTick tick={0} />
									</View>
								</Col>
							</Grid>
						</CardItem>
					</Card>

					<Card>
						<CardItem style={{justifyContent:"space-between"}}>
							<Left>
								{this.state.lightToggle &&
									<Homer />
								}
								{!this.state.lightToggle &&
									<Icon style={spaceComponent}
										name="md-flash" />
								}
							</Left>
							<Right style={flexColumn}>
								<View style={[flexRow, {alignItems: 'center'}]}>
									<Text style={styles.lightStateText}>{this.state.lightState}</Text>
									<Switch value={this.state.lightToggle}
										onValueChange={
											(value) => {
												let lightChange = this.state.lightToggle ? LIGHT_OFF : LIGHT_ON;

												this.setState({
													lightToggle: value,
													lightState: lightChange
												});
											}
										} />
								</View>
							</Right>
						</CardItem>
					</Card>
					<Grid>
						<Row>
							<Col>
								<TouchableOpacity onPress={this.goToPattern} activeOpacity={1}>
									<View style={{paddingRight: 10, paddingBottom: 5}}>
										<Card style={styles.container}>
											<CardItem style={styles.cardItem}>
												<View style={flexColumn}>
													<Text style={styles.cardTitle}>Icon</Text>
												</View>
											</CardItem>
											<CardItem style={styles.cardItem}>
												<View style={flexColumn}>
													<Text style={styles.cardTitle}>{HOME_LIGHT_PATTERN}</Text>
												</View>
											</CardItem>
										</Card>
									</View>
								</TouchableOpacity>
							</Col>
							<Col>
								<View style={{paddingBottom: 5}}>
									<Card style={styles.container}>
										<CardItem style={styles.cardItem}>
											<View style={flexColumn}>
												<Text style={styles.cardTitle}>Icon</Text>
											</View>
										</CardItem>
										<CardItem style={styles.cardItem}>
											<View style={flexColumn}>
												<Text style={styles.cardTitle}>{HOME_GROUP_SYNC}</Text>
											</View>
											<Switch value={this.state.lightSync}
												onValueChange={
													(value) => {
														this.setState({
															lightSync: value
														});
													}
												} />
										</CardItem>
									</Card>
								</View>
							</Col>
						</Row>
						<Row>
							<Col>
								<TouchableOpacity onPress={this.goToAccident} activeOpacity={1}>
									<View style={{paddingRight: 10, paddingBottom: 10}}>
										<Card style={styles.container}>
											<CardItem style={styles.cardItem}>
												<View style={flexColumn}>
													<Text style={styles.cardTitle}>Icon</Text>
												</View>
											</CardItem>
											<CardItem style={styles.cardItem}>
												<View style={flexColumn}>
													<Text style={styles.cardTitle}>{HOME_ACCIDENT_ALERT}</Text>
												</View>
											</CardItem>
										</Card>
									</View>
								</TouchableOpacity>
							</Col>
							<Col>
								<View style={{paddingBottom: 10}}>
									<TouchableOpacity onPress={() => {this.showUpdateDlg();}} activeOpacity={1}>
										<Card style={styles.container}>
											<Grid style={{flex: 1}}>
												<Row size={1} style={[flexColumn, {justifyContent: 'center'}]}>
													<View style={[flexColumn, {justifyContent: 'center'}]}>
														<Text style={styles.firmwareTitle}>{HOME_FIRMWARE_UPDATE}</Text>
													</View>
												</Row>
												<Row size={2} style={{backgroundColor: COLOR_PRIAMRY_LIGHT, justifyContent: 'center'}}>
													<Grid style={{padding: 15}}>
														<Row>
															<Left>
																<Text style={styles.firwareInfo}>{FIRMWARE_UPDATE_VER}</Text>
															</Left>
															<Right>
																<Text style={styles.firwareInfo}>{this.state.updateVersion}</Text>
															</Right>
														</Row>
														<Row>
															<Left>
																<Text style={styles.firwareInfo}>{FIRMWARE_CURRENT_VER}</Text>
															</Left>
															<Right>
																<Text style={styles.firwareInfo}>{this.state.currentVersion}</Text>
															</Right>
														</Row>
														<Row>
															<Left />
															<Text style={styles.firmwareAlert}>{FIRMWARE_NEED_UPDATE}</Text>
															<Right />
														</Row>
													</Grid>
												</Row>
											</Grid>
										</Card>
									</TouchableOpacity>
								</View>
							</Col>
						</Row>
					</Grid>
					<Dialog
						width="0.7"
						visible={this.state.updateDlgVisible}
						onTouchOutside={() => {
							this.setState({ updateDlgVisible: false });
						}}
						dialogTitle={<DialogTitle title={HOME_FIRMWARE_UPDATE} />}
						actions={[
								<DialogButton
									text={DIALOG_OK}
									onPress={() => {
										this.setState({ updateDlgVisible: false });
									}}
								/>
						]}
					>
						<DialogContent>
							<Text style={{alignSelf: 'center', padding: 20 }}>{FIRMWARE_UPDATE_WAITING}</Text>
							<View style={{alignSelf: 'center'}} >
								<ProgressCircle
									percent={this.state.updatePercent}
									radius={50}
									borderWidth={8}
									color={COLOR_SECONDARY}
									shadowColor="#999"
									bgColor={COLOR_PRIAMRY_LIGHT}
								>
									<Text style={{ fontSize: 18 }}>{this.state.updatePercent + '%'}</Text>
								</ProgressCircle>
							</View>
						</DialogContent>
					</Dialog>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	deviceInput: {
		fontSize: 20,
		padding: 10,
		color: 'white',
		fontWeight:'bold',
		backgroundColor: COLOR_SECONDARY
	},

	container: {
		flex: 1,
		height: deviceSize.width / 2 - 20,
		backgroundColor: COLOR_PRIMARY,
	},

	cardItem: {
		backgroundColor: COLOR_PRIMARY
	},

	cardTitle: {
		fontSize: 25,
		color: 'white',
		textAlign: 'center',
	},

	firmwareTitle: {
		fontSize: 20,
		color: 'white',
		textAlign: 'center',
	},

	firwareInfo: {
		fontSize: 17,
		color: 'white',
		textAlign: 'center',
	},

	firmwareAlert: {
		fontSize: 17,
		color: '#ffd460',
		textAlign: 'center',
	},

	titleText: {
		marginLeft: 10,
		marginRight: 6,
		marginTop: 10,
		marginBottom: 10,
		fontSize: 30,
		fontWeight: 'bold',
	},

	bluetoothOptionsText : {
		fontSize: 18,
		color: 'white'
	},

	lightStateText : {
		fontSize: 25,
		fontWeight: 'bold',
		color: 'black',
		marginRight: 25,
	},
});

export default Home
