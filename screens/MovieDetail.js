import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';



const MovieDetail = props => {

    const {route} = props
    const {movie} = route.params

    return (
        <View style={styles.container}>
            <Image 
            style={{width: 150, height: 250}}
            source={{uri: movie.large_cover_image}} />
            <Text>Titl1e: {movie.title} ({movie.year})</Text>
            <Text>Rating: {movie.rating}</Text>
            <Text>{movie.summary}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default MovieDetail;