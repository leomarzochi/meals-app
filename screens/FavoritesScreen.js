import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {useSelector} from 'react-redux'

const FavoritesScreen = () => {
    const favorites = useSelector(state => state.meals.favoriteMeals)
    return (
        <View>
            <Text>{favorites[0].title}</Text>
        </View>
    )
}

export default FavoritesScreen

const styles = StyleSheet.create({})
