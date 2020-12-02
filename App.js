import React from 'react';
import PeoplePage from './src/Pages/PeoplePage';
import PeopleDetails from './src/Pages/PeopleDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {

  const Stack = createStackNavigator();

  const style = {
  	headerStyle: {
		backgroundColor: '#f67',
  	},

  	headerTitleStyle: {
  	color: '#fff',
		padding: 10,
		fontSize: 30,
		textAlign: 'center'
  	}
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'Lista de Pessoas' component = {PeoplePage} options = {style} />
        <Stack.Screen name = 'PeopleDetails' component = {PeopleDetails} options = {({route}) => {
          const titlePage = route.params.person.name.first;

          return ({
            title: titlePage,
            headerStyle: style.headerStyle,
            headerTitleStyle: style.headerTitleStyle
          })
        } } />
      </Stack.Navigator>
    </NavigationContainer>

  );
  
}
