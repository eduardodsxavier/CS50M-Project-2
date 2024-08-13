import { TextInput, Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

// implement the function  with fetch and omdb APIS
function getMovieData(name) {}

export default function SearchScreen({ navigation }) {
  const [ name, setName ] = useState('')

  return(
    <View>
      <TextInput 
        style={styles.input}
	onChangeText={(newName) => {
	  setName(newName)
	}}
	value={name}
      />
      <Pressable style={styles.button} onPress={() => {
	const movie = getMovieData(name)
	navigation.push('Movie', movie)
      }}>
        <Text>Search</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    alignItself: 'center',
    textAlign: 'center',
  },
  button : {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    marginTop: 10,
    width: 100,
    alignItems: 'center',
  },
});
