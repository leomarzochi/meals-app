import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { MEALS } from "../data/dummy-data";

const MealDetailsScreen = ({ navigation, route }) => {
  const { mealId } = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: selectedMeal.title,
      headerRight: () => (
        <Button
          onPress={() => alert("This is a button!")}
          title="Info"
          color="#fff"
        />
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
