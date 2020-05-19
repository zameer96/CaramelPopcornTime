import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';


export default class Homescreen extends React.Component {

    handleListAllMovies = () => {
        this.props.navigation.navigate('movieListing')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>HOME SCREEN</Text>
                <View style={{paddingTop: 10}}>
                    <Button style={{marginTop: 50}} title="List All Movies" onPress={this.handleListAllMovies} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
