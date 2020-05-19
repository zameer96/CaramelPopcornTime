import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Homescreen from '../screens/Homescreen';
import MovieListing from '../screens/MovieListing';
import MovieDetail from '../screens/MovieDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function MovieStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="movieHome">
                <Stack.Screen name="movieHome"
                component={Homescreen}
                options={{title: "HomeScreen"}} />
                <Stack.Screen name="movieListing" 
                component={MovieListing} 
                options={{title: "Movies Listing"}} />
                <Stack.Screen name="movieDetail" 
                component={MovieDetail}
                options={{title: "Movie Detail"}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MovieStackNavigator
