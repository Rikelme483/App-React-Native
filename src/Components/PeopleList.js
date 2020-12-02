import React        from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight} from 'react-native';



function PeopleList({people, navigation} ) {

	if (people.length !== 0) {

	    const style = StyleSheet.create({ //tipo de package json para estilos do texto e imagens
	    	textStyle: {
		    	paddingLeft: 20,
		    	fontWeight: 'bold',
		    	flex: 6
	    	},

	    	imageStyle: {
	    		height: 60,
	    		aspectRatio: 1,
	    		marginLeft: 30,
	    		borderRadius: 20,
	    		flex: 1
	    	},

	    	container: {
	    		backgroundColor: '#f89',
	    		height: 80,
	    		borderBottomColor: 'black',
	    		borderBottomWidth: 2,
	    		flexDirection: 'row',
	    		alignItems: 'center',
	    		justifyContent: 'flex-start',
	    	}
		})

	    const textElements = people.map((person) => { //destructuring dos elementos do json
	    	const {login, picture, name} = person;
	    	console.log(person)

	      return ( 
	      	<TouchableHighlight key = {login.uuid} onPress = { () => {
	      		navigation.navigate("PeopleDetails" , {person})
	      	} } >
		      	<View  style = {style.container} >
			      	<Image source = {{uri: picture.thumbnail}} style = {style.imageStyle} />
			      	<Text style = {style.textStyle} > {`${name.first} ${name.last} ` /*crase para concatenar itens de texto*/} </Text>
		      	</View>
	      	</TouchableHighlight>
	      	)	
	    });

			
	    return (
	    	<View>
	    		{textElements}
	    	</View>
	    );
	}
		const styleLoad = {
			fontSize: 20,
			textAlign: 'center',
			justifyContent: 'center',
			alignItems: 'center',
			marginTop: 100
		}

	    return (
	    	<Text style = {styleLoad} >Carregando os dados...</Text>
	    )
}

export default PeopleList;