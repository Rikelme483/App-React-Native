import React                    from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Header({title}) {
	/*prop para renderizar o valor de title que estiver em App.js*/
	return (
		<View style = {style.containerStyle} > 
			<Text style = {style.title} > {title} </Text>
		</View> 
	);
}

//Variavel style para estilização
const style = StyleSheet.create({
	containerStyle: {
		marginTop: 24,
		backgroundColor: '#f67',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 20
	},

	title: {	
		color: '#fff',
		padding: 10,
		fontSize: 30
	}
});

export default Header;