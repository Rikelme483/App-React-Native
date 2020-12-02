import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default function DataLines({label, data}) {
	const styles = StyleSheet.create({
      line: {
        paddingTop: 6,
        paddingBottom: 6,
	    flexDirection: 'row',
      },

      text: {
      	fontSize: 20,
      }
    })

	return (
			<View style = {styles.line}>
				<Text style = {styles.text} >{label} </Text>
        		<Text style = {styles.text} >{data} </Text>
			</View>

	)
}