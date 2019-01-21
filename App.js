import React, {Component} from 'react';

import { View, Container, Content, Body, Title,
	Button, Text, Radio,
	Left, Right,
	Card, CardItem, Icon, Header,
	Grid, Col,}
	from 'native-base';

import ImageCardButton from './components/ImageCardButton';
import SwitchCard from './components/SwitchCard';
import SeekerCard from './components/SeekerCard';
import NumbericRadioBtnsView from './components/NumbericRadioBtnsView';

import { vCenterRow, spaceComponent } from './style/common';

type Props = {};
const title = "title example";
export default class App extends Component<Props> {
	render() {
		return (
			<Container>
			<Header>
				<Body>
					<Title>TEAM EIGHT</Title>
				</Body>
				<Right />
			</Header>
				<Content padder>
					<Card>
						<CardItem>
							<Icon active name="md-wifi" />
							<Text>EIGHT_123X</Text>
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
						<Col>
							<ImageCardButton
								title="Group text + illurstration"
								icon="md-people"
								cardBkgColor="#FFFFFF" />
						</Col>
						<Col>
							<ImageCardButton
								title="Pattern text + illurstration"
								icon="md-switch"
								cardBkgColor="#FFFFFF" />
						</Col>
					</Grid>

					<ImageCardButton
						title="Turn on text + illurstration"
						icon="md-bulb"
						cardBkgColor="#FFFFFF" />

					<SwitchCard
						title="Switch Card"
						icon="ios-paw"
						cardBkgColor="#FFFFFF" />

					<SeekerCard
						title="Slider Card"
						icon="ios-paw"
						cardBkgColor="#FFFFFF"
					/>

					<NumbericRadioBtnsView
						icons={[
							"ios-paw",
							"ios-paw",
							"ios-paw",
							"ios-paw"
						]} />
				</Content>
			</Container>
		);
	}
}
