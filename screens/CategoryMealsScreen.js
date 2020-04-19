import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import { FlatList } from "react-native-gesture-handler";
import MealItem from "../components/MealItem";

const CategoryMealsScreen = ({ route, navigation }) => {
  const { category } = route.params;

  const availableMeals = useSelector((state) => state.meals.favoriteMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(category.id) >= 0
  );

  const MealListItem = (itemData) => {
    return (
      <MealItem
        mealData={itemData.item}
        onSelectMeal={() =>
          navigation.navigate("Details", { mealId: itemData.item.id })
        }
      />
    );
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FlatList
        data={displayedMeals}
        renderItem={MealListItem}
        style={{ width: "100%", padding: 10 }}
      />
    </View>
  );
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({});
