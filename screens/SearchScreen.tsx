import { TextInput, Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function SearchScreen({ navigation }) {
  const [ name, setName ] = useState('')

  return(
    <View>
      <TextInput 
        style={styles.input}
	onChangeText={() => {}}
	value={name}
      />
      <Pressable style={styles.button} onPress={() => navigation.push('Result')}>
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
