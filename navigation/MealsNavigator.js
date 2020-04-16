import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealsDetailsScreen from "../screens/MealDetailsScreen";
import Colors from "../constants/Colors";

// import HomeScreen from '../screens/HomeScreen';
// import LinksScreen from '../screens/LinksScreen';

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function MealsNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html

  //  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <Stack.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      headerMode='float'
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
        },
        headerTintColor:
          Platform.OS === "android" ? "white" : Colors.primaryColor,
        //   tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
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
        // options={{
        //   title: 'Resources',
        //   tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        // }}
      />
      <Stack.Screen name="Details" component={MealsDetailsScreen} />
    </Stack.Navigator>
  );
}

// function getHeaderTitle(route) {
//   const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

//   switch (routeName) {
//     case 'Home':
//       return 'How to get started';
//     case 'Links':
//       return 'Links to learn more';
//   }
// }
