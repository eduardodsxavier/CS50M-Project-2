import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  return(
    <View style={styles.center}>
      <Pressable style={styles.button} onPress={() => navigation.push('Search')}>
        <Text>Search Movie</Text>
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
  button : {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    marginBottom: 50,
    width: 150,
    alignItems: 'center',
  },
});
