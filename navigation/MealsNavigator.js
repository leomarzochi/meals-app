import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealsDetailsScreen from "../screens/MealDetailsScreen";
import Colors from "../constants/Colors";

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function MealsNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      headerMode="float"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
        },
        headerTintColor:
          Platform.OS === "android" ? "white" : Colors.primaryColor,
      }}
    >
      <Stack.Screen
        name="Home"
        component={CategoriesScreen}
        options={{ title: "Meals App" }}
      />
      <Stack.Screen
        name="Category"
        component={CategoryMealsScreen}
        options={({ route }) => ({ title: route.params.category.title })}
      />
      <Stack.Screen name="Details" component={MealsDetailsScreen} />
    </Stack.Navigator>
  );
}



