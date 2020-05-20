import React from 'react';
import { StyleSheet, View, ScrollView, Text, Button, FlatList } from 'react-native';
import { getMoviesList } from '../utils/api';
import MovieCard from '../components/MovieCard';


export default class MovieListing extends React.Component {

    state = {
        movies: null,
        page: 1,
    }

    async loadMoviesList() {
        const res = await getMoviesList();
        this.setState({
            movies: res
        })
    }

    componentDidMount() {
        this.loadMoviesList()
    }

    // Navigate to the detail page with listing data of the movie
    handleMovieDetailPressed = (movie) => {
        this.props.navigation.navigate('movieDetail', {movie: movie})
    }

    render() {
        if (!this.state.movies) {
            return (
                <View style={styles.container}>
                    <Text>LOADING . . .</Text>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <FlatList data={this.state.movies} 
                renderItem = {({item}) => (
                        <MovieCard movie={item} viewMovieDetail={this.handleMovieDetailPressed}/>
                )}
                keyExtractor = {item => item.id}
                numColumns={2}

                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
