import React, {Component} from 'react';
import { TouchableOpacity, BackHandler, Switch, StyleSheet, Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux'

import { View, Container, Content, Body, Title,
	Button, Text,
	Left, Right,
	Card, CardItem, Icon, Header, Item, Input,
	Grid, Col, Row }
	from 'native-base';
import Dialog, { ScaleAnimation, DialogTitle, DialogButton, DialogContent } from 'react-native-popup-dialog';
import ProgressCircle from 'react-native-progress-circle'

import ImageCardButton from './components/ImageCardButton';
import SwitchCard from './components/SwitchCard';
import SeekerCard from './components/SeekerCard';
import DivideLine from './components/DivideLine';


import { UPDATE_DIALOG_TITLE_TEXT, DIALOG_OK, DIALOG_CLOSE,
	HOME_LIGHT_PATTERN, HOME_GROUP_SYNC, HOME_ACCIDENT_ALERT, HOME_FIRMWARE_UPDATE,
	vCenterRow, spaceComponent, wrapper } from './style/common';

const deviceSize = Dimensions.get('window');

type Props = {};

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			updateDlgVisible: false,
			updatePercent: 88,
			autoConnectToggle : false,
			discoverableToggle: false,
			lightToggle: false,
		};

		this.goToPattern.bind(this);
		this.goToAccident.bind(this);
		this.goToGroup.bind(this);
		this.showUpdateDlg.bind(this);
	}

	goToPattern() {
		Actions.pattern();
	}

	goToAccident() {
		Actions.accident();
	}

	goToGroup() {
		Actions.group();
	}

	showUpdateDlg() {
		this.setState({
			updateDlgVisible: true
		});
	}

	componentDidMount() {
		this.homeBackPressHandler = BackHandler.addEventListener('homeBackPress', () => {
	        if (Actions.currentScene === 'home') {
				// doStuff()
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
				// doStuff()
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
							TEAM 8
						</Text>
						<Grid style={{marginLeft: 12}}>
							<Row></Row><Row></Row>
							<Row><DivideLine /></Row>
						</Grid>
					</View>
					<Card>
						<CardItem style={{justifyContent:"space-between"}}>
							<Grid>
								<Col size={3}>
									<Item regular>
										<Input placeholder='EIGHT_3432' />
										<Icon style={spaceComponent}
											name="md-create" />
									</Item>
									<Grid style={{marginLeft: 10, marginTop: 5}}>
										<Row>
											<Col style={vCenterRow}>
												<Text>Auto Connect</Text>
											</Col>
											<Col style={vCenterRow}>
												<Switch value={this.state.autoConnectToggle}
													style={{ transform: [{ scaleX: 1.0 }, { scaleY: 1.0 }] }}
													onValueChange={
														(value) => {
															this.setState({autoConnectToggle:value});
														}
													} />
											</Col>
										</Row>

										<Row>
											<Col style={vCenterRow}>
												<Text>Discoverable</Text>
											</Col>
											<Col style={vCenterRow}>
												<Switch value={this.state.discoverableToggle}
													style={{ transform: [{ scaleX: 1.0 }, { scaleY: 1.0 }] }}
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
										<Icon style={spaceComponent}
											name="md-battery-charging" />
									</View>

								</Col>
							</Grid>
						</CardItem>
					</Card>

					<Card>
						<CardItem style={{justifyContent:"space-between"}}>
							<Left>
								<Icon style={spaceComponent}
									name="md-create" />
							</Left>
							<Right>
								<Switch value={this.state.lightToggle}
									style={{ transform: [{ scaleX: 1.0 }, { scaleY: 1.0 }] }}
									onValueChange={
										(value) => {
											this.setState({lightToggle:value});
										}
									} />
							</Right>
						</CardItem>
					</Card>
					<Grid>
						<Row>
							<Col>
								<TouchableOpacity onPress={this.goToPattern}>
									<View style={{paddingRight: 10, paddingBottom: 5}}>
										<Card style={styles.container}>
											<CardItem>
												<View style={{flex: 1,  flexDirection: 'column'}}>
													<Text style={{textAlign: 'center'}}>{HOME_LIGHT_PATTERN}</Text>
												</View>
											</CardItem>
										</Card>
									</View>
								</TouchableOpacity>
							</Col>
							<Col>
								<TouchableOpacity onPress={this.goToGroup}>
									<View style={{paddingBottom: 5}}>
										<Card style={styles.container}>
											<CardItem>
												<View style={{flex: 1,  flexDirection: 'column'}}>
													<Text style={{textAlign: 'center'}}>{HOME_GROUP_SYNC}</Text>
												</View>
											</CardItem>
										</Card>
									</View>
								</TouchableOpacity>
							</Col>
						</Row>
						<Row>
							<Col>
								<TouchableOpacity onPress={this.goToAccident}>
									<View style={{paddingRight: 10, paddingBottom: 10}}>
										<Card style={styles.container}>
											<CardItem>
												<View style={{flex: 1,  flexDirection: 'column'}}>
													<Text style={{textAlign: 'center'}}>{HOME_ACCIDENT_ALERT}</Text>
												</View>
											</CardItem>
										</Card>
									</View>
								</TouchableOpacity>
							</Col>
							<Col>
								<View style={{paddingBottom: 10}}>
									<Card style={styles.container}>
										<Grid style={{flex: 1}}>
											<Row size={1} style={{flex: 1,  flexDirection: 'column', justifyContent: 'center'}}>
												<TouchableOpacity onPress={() => {this.showUpdateDlg();}}>
													<View style={{flex: 1,  flexDirection: 'column', justifyContent: 'center'}}>
														<Text style={{alignSelf:'center', textAlign: 'center'}}>{HOME_FIRMWARE_UPDATE}</Text>
													</View>
												</TouchableOpacity>
											</Row>
											<Row size={2} style={{backgroundColor: 'gray', justifyContent: 'center'}}>
												<Grid style={{padding: 20}}>
													<Row>
														<Left>
															<Text>Updated Ver.</Text>
														</Left>
														<Right>
															<Text>00.01</Text>
														</Right>
													</Row>
													<Row>
														<Left>
															<Text>Current Ver.</Text>
														</Left>
														<Right>
															<Text>00.00</Text>
														</Right>
													</Row>
												</Grid>
											</Row>
										</Grid>
									</Card>
								</View>
							</Col>
						</Row>
					</Grid>
					<Dialog
						width="0.7"
						visible={this.state.updateDlgVisible}
						dialogAnimation={new ScaleAnimation({
							toValue: 0,
							useNativeDriver: true,
						})}
						onTouchOutside={() => {
							this.setState({ updateDlgVisible: false });
						}}
						dialogTitle={<DialogTitle title={UPDATE_DIALOG_TITLE_TEXT} />}
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
							<Text style={{alignSelf: 'center', padding:20 }}>Please wait for update. . .</Text>
							<View style={{alignSelf: 'center'}} >
								<ProgressCircle
									percent={this.state.updatePercent}
									radius={50}
									borderWidth={8}
									color="#3399FF"
									shadowColor="#999"
									bgColor="#fff"
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
	titleText: {
		marginLeft: 10,
		marginRight: 6,
		marginTop: 10,
		marginBottom: 10,
		fontSize: 25,
		fontWeight: 'bold',
	},

	container: {
		flex: 1,
		height: deviceSize.width / 2 - 20,
	}
});

export default Home
