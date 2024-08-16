import { FlatList, StyleSheet, Text, Image, SafeAreaView, Pressable } from 'react-native';

let nav

function setNav (navigation) {
  nav = navigation
}

async function getMovieData(id) {
  const URL = `https://www.omdbapi.com/?i=${id}&apikey=996972b0`
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

async function SendToMovieScreen(id){
  const movie = await getMovieData(id)
  if (movie.Response !== 'False') {
    nav.push('Movie', {movie})
  }
}


const Movie = ({movie}) => (
  <Pressable
    style={styles.moviesList}
    onPress={() => SendToMovieScreen(movie.imdbID)
  }>
    <Image 
        source={{uri: movie.Poster}}
        style={{width: 200, height: 300}} 
    />
    <Text>Title: {movie.Title}</Text>
    <Text>Year: {movie.Year}</Text>
    <Text>Type: {movie.Type}</Text>
  </Pressable>
);

export default function ResultScreen({ route, navigation }) {
  setNav(navigation)
  const params = route.params
  const MOVIES = params.movies

  return(
    <SafeAreaView style={styles.scroll}>
      <FlatList
        data={MOVIES.Search}
        renderItem={({item}) => <Movie movie={item}/>}
        keyExtractor={item => item.imdbID}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  moviesList: {
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 30,
  }
});
