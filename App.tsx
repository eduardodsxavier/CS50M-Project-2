import './gesture-handler';

import { StyleSheet, Text, View, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/SearchScreen'
import ResultScreen from './screens/ResultScreen'
import MovieScreen from './screens/MovieScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
	<Stack.Screen 
	  name="Home" 
	  component={HomeScreen} 
	/>
        <Stack.Screen 
	  name="Search" 
	  component={SearchScreen} 
	/>
	<Stack.Screen 
	  name="Result" 
	  component={ResultScreen} 
	/>
        <Stack.Screen 
	  name="Movie" 
	  component={MovieScreen} 
	/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
