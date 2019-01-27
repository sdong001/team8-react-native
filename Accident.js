import React, {Component} from 'react';
import { TouchableOpacity, StyleSheet} from 'react-native'
import { Actions } from 'react-native-router-flux'

import { View, Container, Content, Body, Title,
	Button, Text, Radio,
	Left, Right,
	Card, CardItem, Icon, Header, List, ListItem,
	Grid, Col, Row}
	from 'native-base';

import DivideLine from './components/DivideLine';
import SwitchCard from './components/SwitchCard';

import { vCenterRow, spaceComponent, wrapper,
	COLOR_PRIMARY, COLOR_SECONDARY, COLOR_PRIMARY_DARK, COLOR_PRIAMRY_LIGHT,
	ACCIDENT_SENSITIVITY_INFO, ACCIDENT_ALERT_TOGGLE, ACCIDENT_ALERT_INFO, ACCIDENT_SENSITIVITY_LABEL,
	ACCIDENT_SENSITIVITY_HIGH, ACCIDENT_SENSITIVITY_MEDIUM, ACCIDENT_SENSITIVITY_LOW,
	ACCIDENT_SENSITIVITY_HIGH_DESC, ACCIDENT_SENSITIVITY_MEDIUM_DESC, ACCIDENT_SENSITIVITY_LOW_DESC,
	EMERGENCY_CONTACT
} from './style/common';

type Props = {};

const contacts = [
	{ name : 'Mom', number: '01012345678' },
	{ name : 'Dad', number: '01012345678' },
	{ name : 'Crew Leader', number: '01012345678' },
];

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

		this.state = {
			levelRadioSelected : [ true, false, false ],
			curLevelIdx : HIGH
		};

		this.goToHome.bind(this);
	}

	goToHome() {
		Actions.home();
	}

	render() {
		return (
			<Container>
				<Content padder>
					<SwitchCard
						title={ACCIDENT_ALERT_TOGGLE}
						titleStyle={styles.cardTitle}
						cardBkgColor={COLOR_PRIMARY} />

					<Text style={{marginTop: 10, marginBottom: 25}}>
						{ACCIDENT_ALERT_INFO}
					</Text>

					<Card>
						<CardItem style={{flex: 1, flexDirection: 'column', backgroundColor: COLOR_PRIMARY, justifyContent:'flex-start', alignItems: 'flex-start'}}>
							<Left style={{flex: 1, flexDirection: 'column'}}>
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
									<Row style={styles.levelContainer}>
										<Radio onPress={() => {
											if( this.state.curLevel != idx ) {
												let changeSeleted = this.state.levelRadioSelected;
												changeSeleted[idx] = true;
												changeSeleted[this.state.curLevelIdx] = false;

												this.setState({
													levelRadioSelected : changeSeleted,
													curLevelIdx: idx,
												});
											}
										}}
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
						<CardItem style={{flex: 1, flexDirection: 'column', backgroundColor: COLOR_PRIMARY}}>
							<View style={{alignSelf: 'stretch', flex: 1, flexDirection: 'row', justifyContent:"space-between"}}>
								<Left>
									<Text style={styles.cardTitle}>{EMERGENCY_CONTACT}</Text>
								</Left>
								<View style={{flexWrap: "wrap"}}>
									<Right>
										<View style={{flex: 1, flexDirection: 'row'}}>
											<Icon style={[spaceComponent, {color: 'white', marginRight: 15}]}
												name="md-add" />
											<Icon style={[spaceComponent, {color: 'white'}]}
												name="md-checkmark" />
										</View>
									</Right>
								</View>
							</View>
							<DivideLine />
						</CardItem>
						<CardItem style={{flex: 1, flexDirection: 'column', backgroundColor: COLOR_PRIAMRY_LIGHT}}>
							{contacts.map((item, idx) => (
								<View style={styles.contactsItem} >
									<Left style={{flex: 1, flexDirection:'row'}}>
										<Text style={styles.levelTitle}>{item.name}</Text>
									</Left>
									<Body>
										<Text style={styles.levelTitle}>{item.number}</Text>
									</Body>
									<Right>
										<Text></Text>
									</Right>
								</View>
							))}
						</CardItem>
					</Card>
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

	info: {
		color: 'white',
		fontSize: 14,
	},

	levelTitle: {
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
