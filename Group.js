import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

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

const Group = () => {
	const goToHome = () => {
		Actions.home();
	}

	return (
		<Container>
			<Content padder>
				<Text>Group page</Text>
			</Content>
		</Container>
	);
}

export default Group
