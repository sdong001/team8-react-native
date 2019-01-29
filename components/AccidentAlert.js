// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
//
// import { View } from 'native-base';
//
// import Dialog, { DialogTitle, DialogButton, DialogContent } from 'react-native-popup-dialog';
// import ProgressCircle from 'react-native-progress-circle';
//
// import { COLOR_PRIMARY } from '../style/common';
//
// class AccidentAlert extends Component {
//
//     constructor(props) {
//         super(props);
//     }
//
// 	render() {
// 		return (
//             <Dialog
//                 width="0.7"
//                 visible={this.state.updateDlgVisible}
//                 onTouchOutside={() => {
//                     this.setState({ updateDlgVisible: false });
//                 }}
//                 dialogTitle={<DialogTitle title='Accident Alert' />}
//                 actions={[
//                         <DialogButton
//                             text={DIALOG_OK}
//                             onPress={() => {
//                                 this.setState({ updateDlgVisible: false });
//                             }}
//                         />
//                 ]}
//             >
//                 <DialogContent>
//                     <Text style={{alignSelf: 'center', padding: 20 }}>Accident occured!</Text>
//                     <View style={{alignSelf: 'center'}} >
//                         <ProgressCircle
//                             percent={this.state.updatePercent}
//                             radius={50}
//                             borderWidth={8}
//                             color={COLOR_SECONDARY}
//                             shadowColor="#999"
//                             bgColor={COLOR_PRIAMRY_LIGHT}
//                         >
//                             <Text style={{ fontSize: 18 }}>{this.state.updatePercent + '%'}</Text>
//                         </ProgressCircle>
//                     </View>
//                 </DialogContent>
//             </Dialog>
// 		);
// 	}
// }
//
// export default AccidentAlert
