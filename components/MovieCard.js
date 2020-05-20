import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';


const MovieCard = props => {
    const {movie, navigate, viewMovieDetail} = props

    return (
        <TouchableOpacity onPress={() => viewMovieDetail(movie)}>
            <View style={styles.container}>
                <Image
                style={styles.image}
                source={{ uri: movie.medium_cover_image}}
                />
                <View style={styles.text_container}>
                    <Text style={{...styles.text, fontWeight: 'bold'}}>{movie.title}</Text>
                    <Text style={styles.text}>{movie.year.toString()}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 215,
        height: 270,
        flexDirection: "row",
        // margin: 10,
        // backgroundColor: 'red'
    },
    image: {
        width: 215,
        height: 270,
        position: 'absolute',
        // resizeMode: 'stretch'
    },
    text_container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        alignSelf: 'flex-end'
    },
    text: {
        color: 'white',
        fontSize: 15,
        marginLeft: 10
    }
})

export default MovieCard;
