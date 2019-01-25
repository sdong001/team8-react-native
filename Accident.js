import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native'
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
	ACCIDENT_ALERT_TOGGLE, ACCIDENT_ALERT_INFO, ACCIDENT_SENSITIVITY_LABEL,
	ACCIDENT_SENSITIVITY_HIGH, ACCIDENT_SENSITIVITY_MEDIUM, ACCIDENT_SENSITIVITY_LOW,
	ACCIDENT_SENSITIVITY_HIGH_DESC, ACCIDENT_SENSITIVITY_MEDIUM_DESC, ACCIDENT_SENSITIVITY_LOW_DESC,
	EMERGENCY_CONTACT
} from './style/common';

type Props = {};

const Accident = () => {
	const goToHome = () => {
		Actions.home();
	}

	return (
		<Container>
			<Content padder>
				<SwitchCard
					title={ACCIDENT_ALERT_TOGGLE}
					cardBkgColor="#FFFFFF" />

				<Text>{ACCIDENT_ALERT_INFO}</Text>

				<Card>
					<CardItem>
						<Text>{ACCIDENT_SENSITIVITY_LABEL}</Text>
						<Text>{ACCIDENT_SENSITIVITY_INFO}</Text>

						<DivideLine />
						<Grid>
							<Row style={{justifyContent:"space-between"}}>
								<Radio selected={true} />
								<Left>
									<Text>{ACCIDENT_SENSITIVITY_HIGH}</Text>
								</Left>
								<Right>
									<Text>{ACCIDENT_SENSITIVITY_HIGH_DESC}</Text>
								</Right>
							</Row>
							<Row style={{justifyContent:"space-between"}}>
								<Radio selected={true} />
								<Left>
									<Text>{ACCIDENT_SENSITIVITY_MEDIUM}</Text>
								</Left>
								<Right>
									<Text>{ACCIDENT_SENSITIVITY_MEDIUM_DESC}</Text>
								</Right>
							</Row>
							<Row style={{justifyContent:"space-between"}}>
								<Radio selected={true} />
								<Left>
									<Text>{ACCIDENT_SENSITIVITY_LOW}</Text>
								</Left>
								<Right>
									<Text>{ACCIDENT_SENSITIVITY_LOW_DESC}</Text>
								</Right>
							</Row>
						</Grid>
					</CardItem>
				</Card>

				<Card>
					<CardItem style={{flex: 1, flexDirection: 'column'}}>
						<View style={{alignSelf: 'stretch', flex: 1, flexDirection: 'row', justifyContent:"space-between"}}>
							<Left>
								<Text>{EMERGENCY_CONTACT}</Text>
							</Left>
							<Right>
								<View style={{flex: 1, flexDirection: 'row'}}>
									<Icon style={spaceComponent}
										name="md-add" />
									<Icon style={spaceComponent}
										name="md-checkmark" />
								</View>
							</Right>
						</View>
						<DivideLine />

						<List style={{width: '100%'}}>
							<ListItem>
								<View style={{alignSelf: 'stretch', flex: 1, flexDirection: 'row', justifyContent:"space-between"}} >
									<Left style={{flex: 1, flexDirection:'row'}}>
										<Text>Mom</Text>
									</Left>
									<Body>
										<Text>01012345678</Text>
									</Body>
									<Right>
										<Text></Text>
									</Right>
								</View>
							</ListItem>
							<ListItem>
								<View style={{alignSelf: 'stretch', flex: 1, flexDirection: 'row', justifyContent:"space-between"}} >
									<Left style={{flex: 1, flexDirection:'row'}}>
										<Text>Dad</Text>
									</Left>
									<Body>
										<Text>01012345678</Text>
									</Body>
									<Right>
										<Text></Text>
									</Right>
								</View>
							</ListItem>
							<ListItem>
								<View style={{alignSelf: 'stretch', flex: 1, flexDirection: 'row', justifyContent:"space-between"}} >
									<Left style={{flex: 1, flexDirection:'row'}}>
										<Text>Son</Text>
									</Left>
									<Body>
										<Text>01012345678</Text>
									</Body>
									<Right>
										<Text></Text>
									</Right>
								</View>
							</ListItem>
						</List>
					</CardItem>
				</Card>
			</Content>
		</Container>
	);
}

export default Accident
