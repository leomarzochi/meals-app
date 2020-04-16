import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import { MEALS } from "../data/dummy-data";

const MealDetailsScreen = ({ navigation, route }) => {
  const { mealId } = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: selectedMeal.title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="favorite"
            iconName="ios-star"
            onPress={() => console.log("Favorited")}
          />
        </HeaderButtons>
      ),
    });
  });

  return (
    <View>
      <Text>{selectedMeal.title}</Text>
    </View>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({});
