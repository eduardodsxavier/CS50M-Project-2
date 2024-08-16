import { TextInput, Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

// implement the function  with fetch and omdb APIS
async function getMoviesData(name) {
  const URL = `https://www.omdbapi.com/?s=${name}&apikey=996972b0`
  try {
    const response = await fetch(URL)
    if (!response.ok) {
      return false
    }
    const json = await response.json()
    return json
  }
  catch (error) {
    return false
  }
}

async function SearchButton(navigation, name){
  const movies = await getMoviesData(name)
  if (movies.Response !== 'False') {
    navigation.push('Result', {movies})
  }
}

export default function SearchScreen({ navigation }) {
  const [ name, setName ] = useState('')

  return(
    <View style={styles.center}>
      <TextInput 
        style={styles.input}
	onChangeText={(newName) => {
	  setName(newName)
	}}
	value={name}
     />
      <Pressable style={styles.button} onPress={() => SearchButton(navigation, name)}>
        <Text>Search</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 300,
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
    marginTop: 15,
    width: 100,
    alignItems: 'center',
  },
});
