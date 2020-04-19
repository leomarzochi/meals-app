import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import LinksScreen from "../screens/LinksScreen";
import FavoritesMealsScreen from '../screens/FavoritesScreen'
import MealsNavigator from "../navigation/MealsNavigator";
import Colors from "../constants/Colors";


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Meals";

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        activeTintColor: Colors.secondaryColor,
        inactiveTintColor: Colors.primaryColor,
        activeBackgroundColor: '#eee'
        
      }}
    >
      <BottomTab.Screen
        name="Meals"
        component={MealsNavigator}
        options={{
          title: "Meals",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-home" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={FavoritesMealsScreen}
        options={{
          title: "Favorites",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-star" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
