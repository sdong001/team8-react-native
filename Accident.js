import React, {Component} from 'react';
import { Platform, PermissionsAndroid, StyleSheet, Alert, Switch, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

import { View, Container, Content,
	Text, Radio, CheckBox,
	Left, Right,
	Card, CardItem, Icon, Item, Input,
	Grid, Col, Row}
	from 'native-base';
import Dialog, { DialogTitle, DialogButton, DialogContent } from 'react-native-popup-dialog';

import SwitchCard from './components/SwitchCard';
import DivideLine from './components/DivideLine';

import { flexColumn, flexRow, spaceComponent,
	DIALOG_OK, DIALOG_CLOSE,
	COLOR_PRIMARY, COLOR_SECONDARY, COLOR_PRIMARY_DARK, COLOR_PRIAMRY_LIGHT,
	ACCIDENT_SENSITIVITY_INFO, ACCIDENT_ALERT_ON, ACCIDENT_ALERT_OFF, ACCIDENT_ALERT_INFO, ACCIDENT_SENSITIVITY_LABEL,
	ACCIDENT_SENSITIVITY_HIGH, ACCIDENT_SENSITIVITY_MEDIUM, ACCIDENT_SENSITIVITY_LOW,
	ACCIDENT_SENSITIVITY_HIGH_DESC, ACCIDENT_SENSITIVITY_MEDIUM_DESC, ACCIDENT_SENSITIVITY_LOW_DESC,
	EMERGENCY_CONTACT
} from './style/common';

type Props = {};

const HIGH = 0;
const MID = 1;
const LOW = 2;

const levels = [
	{
		level : ACCIDENT_SENSITIVITY_HIGH,
		desc : ACCIDENT_SENSITIVITY_HIGH_DESC,
	},
	{
		level : ACCIDENT_SENSITIVITY_MEDIUM,
		desc : ACCIDENT_SENSITIVITY_MEDIUM_DESC,
	},
	{
		level : ACCIDENT_SENSITIVITY_LOW,
		desc : ACCIDENT_SENSITIVITY_LOW_DESC,
	},
];


class Accident extends Component {
	constructor(props) {
		super(props);

		this.grandtedPermission = false;

		this.state = {
			levelRadioSelected : [ true, false, false ], // be set from device
			curLevel : HIGH, // be set from devcie
			contacts: [
				{ name : 'Mom', number: '01012345678', checked: false},
				{ name : 'Dad', number: '01012345678', checked: false },
				{ name : 'Crew Leader', number: '01012345678', checked: false },
			], // save app
			contactDialogToggle: false,
			contactDlgName: '',
			contactDlgNumber: '',
			alertToggle: false, // be set from devcie
			alertCardBkg: COLOR_PRIMARY,
			alertCardBorder: COLOR_PRIMARY,
			alertState: ACCIDENT_ALERT_ON,
			alertTextColor: 'white',
		};

		this.addContactsFromDlg.bind(this);
	}

	componentDidMount() {

	}

	addContactsFromDlg() {
		let addContacts = this.state.contacts;

		addContacts.push({
			name : this.state.contactDlgName,
			number : this.state.contactDlgNumber,
			checked: false
		});

		this.setState({
			contacts: addContacts
		});
	}

	goToHome() {
		Actions.home();
	}

	render() {
		return (
			<Container>
				<Content padder>
					<TouchableOpacity onPress={
						() => {
							let changeToggle = !this.state.alertToggle;
							let accChange = this.state.alertToggle ? ACCIDENT_ALERT_OFF : ACCIDENT_ALERT_ON;
							const changeBkg = this.state.alertToggle ? COLOR_PRIMARY : 'white';
							const changeBorder = this.state.alertToggle ? COLOR_PRIMARY : COLOR_PRIAMRY_LIGHT;
							const changeTextColor = this.state.alertToggle ? 'white' : 'black';

							this.setState({
								alertToggle: changeToggle,
								alertState: accChange,
								alertCardBkg: changeBkg,
								alertCardBorder: changeBorder,
								alertTextColor: changeTextColor
							});
						}
					} activeOpacity={1}>
						<Card>
							<CardItem style={{justifyContent:"space-between", backgroundColor: this.state.alertCardBkg, borderWidth: 2, borderColor: this.state.alertCardBorder}}>
								<Left style={{marginLeft: 10}}>
									{this.state.alertToggle &&
										<Icon style={{color: '#ffd460'}}
											name="md-notifications" />
									}
									{!this.state.alertToggle &&
										<Icon style={{color: '#ffd460'}}
											name="md-notifications-off" />
									}
								</Left>
								<Right>
									<View style={[flexRow, {alignItems: 'center'}]}>
										<Text style={[styles.cardTitle, {color: this.state.alertTextColor, marginRight: 25}]}>{this.state.alertState}</Text>
										<Switch value={this.state.alertToggle}
											style={{ transform: [{ scaleX: 1.0 }, { scaleY: 1.0 }] }}
											onValueChange={
												(value) => {
													let accChange = this.state.alertToggle ? ACCIDENT_ALERT_OFF : ACCIDENT_ALERT_ON;
													const changeBkg = this.state.alertToggle ? COLOR_PRIMARY : 'white';
													const changeBorder = this.state.alertToggle ? COLOR_PRIMARY : COLOR_PRIAMRY_LIGHT;
													const changeTextColor = this.state.alertToggle ? 'white' : 'black';

													this.setState({
														alertToggle: value,
														alertState: accChange,
														alertCardBkg: changeBkg,
														alertCardBorder: changeBorder,
														alertTextColor: changeTextColor
													});
												}
											}/>
									</View>
								</Right>
							</CardItem>
						</Card>
					</TouchableOpacity>

					<Text style={{marginTop: 10, marginBottom: 25}}>
						{ACCIDENT_ALERT_INFO}
					</Text>

					<Card>
						<CardItem style={[flexColumn, {backgroundColor: COLOR_PRIMARY, justifyContent:'flex-start'}]}>
							<Left style={flexColumn}>
								<Text style={[styles.cardTitle, {marginBottom: 10}]}>
									{ACCIDENT_SENSITIVITY_LABEL}
								</Text>
								<Text style={[styles.info, {marginBottom: 10}]}>
									{ACCIDENT_SENSITIVITY_INFO}
								</Text>
							</Left>
						</CardItem>
						<CardItem style={{backgroundColor: COLOR_PRIAMRY_LIGHT}}>
							<Grid>
								{levels.map((item, idx) => (
									<Row style={styles.levelContainer} onPress={() => {
										if( this.state.curLevel != idx ) {
											let changeSeleted = this.state.levelRadioSelected;
											changeSeleted[idx] = true;
											changeSeleted[this.state.curLevel] = false;

											this.setState({
												levelRadioSelected : changeSeleted,
												curLevel: idx,
											});
										}
									}}>
										<Radio
										selected={this.state.levelRadioSelected[idx]} color='white' selectedColor={COLOR_SECONDARY} />
										<Left style={styles.levelText}>
											<Text style={[styles.levelTitle, {alignSelf: 'flex-start'}]}>{item.level}</Text>
											<Text style={[styles.info, {alignSelf: 'flex-start'}]}>{item.desc}</Text>
										</Left>
									</Row>
								))}
							</Grid>
						</CardItem>
					</Card>

					<Card>
						<CardItem style={[flexColumn, {backgroundColor: COLOR_PRIMARY}]}>
							<View style={[flexRow, {alignSelf: 'stretch', justifyContent:"space-between"}]}>
								<Left>
									<Text style={styles.cardTitle}>{EMERGENCY_CONTACT}</Text>
								</Left>
								<View style={{flexWrap: "wrap"}}>
									<Right>
										<View style={flexRow}>
											<Icon onPress={() => {
												this.setState({
													contactDialogToggle: true
												});
											}} style={[spaceComponent, {color: 'white', marginRight: 15}]}
												name="md-add" />
											<Icon onPress={() => {
												let changeContacts = this.state.contacts;

												for(var i = 0; i<changeContacts.length; i++) {
													if( changeContacts[i].checked == true ) {
														changeContacts.splice(i, 1);
													}
												}

												this.setState({
													contacts: changeContacts
												});
											}} style={[spaceComponent, {color: 'white'}]}
												name="md-trash" />
										</View>
									</Right>
								</View>
							</View>
						</CardItem>
						<CardItem style={[flexColumn, {backgroundColor: COLOR_PRIAMRY_LIGHT}]}>
							{this.state.contacts.map((item, idx) => {
								let checkBoxColor = item.checked ? COLOR_SECONDARY : 'white';
								return (
									<TouchableOpacity style={flexRow}  onPress={() => {
										let changeContacts = this.state.contacts;
										changeContacts[idx].checked = !item.checked;

										this.setState({
											contacts: changeContacts
										});
									}} activeOpacity={1}>
										<View style={styles.contactsItem} >
											<Left style={flexRow}>
												<CheckBox checked={item.checked} style={{marginRight: 25}} color={checkBoxColor} onPress={() => {
													let changeContacts = this.state.contacts;
													changeContacts[idx].checked = !item.checked;

													this.setState({
														contacts: changeContacts
													});
												}} />
												<Text style={styles.contactText}>{item.name}</Text>
											</Left>
											<Right>
												<Text style={[styles.contactText, {marginRight: 50}]}>{item.number}</Text>
											</Right>
										</View>
									</TouchableOpacity>
								)
							})}
						</CardItem>
					</Card>
					<Dialog
						width="0.7"
						visible={this.state.contactDialogToggle}
						onTouchOutside={() => {
							this.setState({ contactDialogToggle: false });
						}}
						dialogTitle={<DialogTitle title='Add contact' />}
						actions={[
								<DialogButton
									text={DIALOG_OK}
									onPress={() => {
										this.setState({ contactDialogToggle: false });
										this.addContactsFromDlg();
									}}
								/>,
								<DialogButton
									text={DIALOG_CLOSE}
									onPress={() => {
										this.setState({ contactDialogToggle: false });
									}}
								/>
						]}
					>
						<DialogContent>
							<View style={{marginTop:20, alignSelf: 'center'}} >
								<Item style={{width: '100%', marginBottom:10, backgroundColor: COLOR_SECONDARY, borderColor: COLOR_SECONDARY}}regular>
									<Icon style={[spaceComponent, {color: 'white', backgroundColor: COLOR_SECONDARY}]}
										name="md-person" />
									<Input placeholder='name' style={styles.contactInput} onChangeText={(contactDlgName) => {
										this.setState({contactDlgName});
									}}/>
								</Item>
								<Item style={{width: '100%', backgroundColor: COLOR_SECONDARY, borderColor: COLOR_SECONDARY}}regular>
									<Icon style={[spaceComponent, {color: 'white', backgroundColor: COLOR_SECONDARY}]}
										name="ios-call" />
									<Input placeholder='phone number' style={styles.contactInput} onChangeText={(contactDlgNumber) => {
										this.setState({contactDlgNumber});
									}}/>
								</Item>
							</View>
						</DialogContent>
					</Dialog>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	cardTitle: {
		color: 'white',
		fontSize: 25,
		alignSelf: 'flex-start'
	},

	contactInput: {
		fontSize: 20,
		padding: 10,
		color: 'white',
		fontWeight:'bold',
		backgroundColor: COLOR_PRIAMRY_LIGHT
	},

	info: {
		color: 'white',
		fontSize: 14,
	},

	levelTitle: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 17,
	},

	contactText: {
		color: 'white',
		fontSize: 17,
	},

	levelContainer: {
		marginBottom: 25,
		justifyContent:"space-between"
	},

	levelText: {
		flex: 1,
		flexDirection: 'column',
		alignSelf: 'flex-start',
		marginLeft: 10
	},

	contactsItem: {
		width: '100%',
		alignSelf: 'stretch',
		flex: 1,
		flexDirection: 'row',
		justifyContent:"space-between",
		marginBottom: 15,
	},
});

export default Accident
