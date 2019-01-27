import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

import { View, Container, Content, Body,
	Button, Text, List, ListItem, Thumbnail,
	Left, Right,
	Card, CardItem, Icon, Header,
	Grid, Col, Row}
	from 'native-base';

import { vCenterRow, spaceComponent,
	COLOR_PRIMARY, COLOR_PRIMARY_DARK, COLOR_SECONDARY,
 	NOT_PAIRED
}
from './style/common';

type Props = {};

const renderItems = ['EIGHT_1234', 'EIGHT_3234'];

class Discover extends Component {
	constructor(props) {
		super(props);

		this.selectedColor = {
			backgroundColor: COLOR_SECONDARY
		};

		this.unSelectedColor = {
			backgroundColor: COLOR_PRIMARY_DARK
		};

		this.state = {
			itemBkgColor: [this.unSelectedColor, this.unSelectedColor],
			beforeItemIdx: 0
		};

		this.goToHome.bind(this);
	}

	goToHome() {
		Actions.home();
	}

	render() {
		return (
			<Container style={{backgroundColor: COLOR_PRIMARY}}>
				<Content contentContainerStyle={styles.content} padder>
					<Grid style={{paddingLeft: 36, paddingRight: 36}}>
						<Row>
							<View style={{flex: 1, justifyContent: 'center'}}>
								<Text style={{textAlign: 'center'}}>
									TEAM EIGHT
								</Text>
							</View>
						</Row>
						<Row style={{flex: 1, flexDirection: 'column'}}>
							<Card style={styles.cardContainer}>
								{renderItems.map((item, idx) => (
									<TouchableOpacity style={this.state.itemBkgColor[idx]} onPress={() => {
										let changeBkgColor = this.state.itemBkgColor;

										changeBkgColor[this.state.beforeItemIdx] = this.unSelectedColor;
										changeBkgColor[idx] = this.selectedColor;

										this.setState({
											itemBkgColor : changeBkgColor,
											beforeItemIdx: idx
										});
										if( idx == 0 ) {
											this.goToHome();
										}
										console.log('touch listitem', idx);
									}}>
										<CardItem style={[this.state.itemBkgColor[idx], styles.cardItem]}>
											<Body>
												<Text style={styles.listItemText}>{item}</Text>
												<Text style={styles.listItemNote} numberOfLines={1}>{NOT_PAIRED}</Text>
											</Body>
										</CardItem>
									</TouchableOpacity>
								))}
							</Card>
						</Row>
					</Grid>
				</Content>
			</Container>
		);
	}
}

const styles = {

	cardContainer: {
		borderRadius: 10,
		height: 300,
		backgroundColor: COLOR_PRIMARY_DARK,
		borderColor : COLOR_PRIMARY_DARK
	},

	cardItem: {
		marginLeft: 20,
		marginTop: 10,
	},

	listItemText : {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold'
	},

	listItemNote : {
		color: 'white',
		fontSize: 15
	},

	content: {
		flexGrow: 1,
		justifyContent: 'center'
	},
}

export default Discover
