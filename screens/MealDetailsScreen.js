import React, { useCallback, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch, useStore } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import { toggleFavorite } from "../store/actions/mealsActions";

const MealDetailsScreen = ({ navigation, route }) => {
  const { mealId } = route.params;

  const meals = useSelector((state) => state.meals.meals);
  const currentMealIsFavorite = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId)
  );

  const selectedMeal = meals.find((meal) => meal.id === mealId);

  const dispatch = useDispatch();

  const dispatchToggleFavoriteHandler = useCallback(() => {
    console.log("reduced");
    dispatch(toggleFavorite(mealId));
  }, [dispatch]);

  navigation.setOptions({
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="favorite"
          iconName={currentMealIsFavorite ? 'ios-star-outline' : 'ios-star'}
          onPress={dispatchToggleFavoriteHandler}
        />
      </HeaderButtons>
    ),
  });

  return (
    <View>
      <Text>{selectedMeal.title}</Text>
    </View>
  );
};

export default MealDetailsScreen;
