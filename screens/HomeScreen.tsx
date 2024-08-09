import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  return(
    <View>
      <Pressable style={styles.button} onPress={() => navigation.push('Search')}>
        <Text>Search Movie</Text>
      </Pressable>
      <View style={styles.center}>
        <Text>Movie Browser</Text>
        <Text>Using React Native, React Navigation and OMDB</Text>
        <Text>A Software created by Eduardo</Text>
      </View>
    </View>
  )
}
 
const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button : {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    marginBottom: 50,
    width: 100,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
});
