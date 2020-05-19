import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { getMoviesList } from '../utils/api';
import { FlatList } from 'react-native-gesture-handler';
import { Value } from 'react-native-reanimated';


export default class MovieListing extends React.Component {

    constructor() {
        super()
        this.state = {
            movies: null  
        }
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
                <Text> Movies List!</Text>
                <FlatList data={this.state.movies} 
                renderItem = {({item}) => (
                    <View style={{paddingTop:10}}>
                        <Button title={item.title}
                        onPress={() => this.handleMovieDetailPressed(item)} />
                    </View>
                )}
                keyExtractor = {item => item.id}
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
