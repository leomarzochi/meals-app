import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TouchableNativeFeedback,
} from "react-native";

const MealItem = ({ mealData, onSelectMeal }) => {
  return (
    <TouchableNativeFeedback onPress={onSelectMeal}>
      <View style={styles.mealItem}>
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
          <ImageBackground
            style={styles.bgImage}
            source={{ uri: mealData.imageUrl }}
          >
            <Text numberOfLines={1} style={styles.title}>
              {mealData.title}
            </Text>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
          <Text>{mealData.duration}m</Text>
          <Text>{mealData.complexity.toUpperCase()} </Text>
          <Text>{mealData.affordability.toUpperCase()} </Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#aa7a",
    marginBottom: 10,
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetails: {
    height: "15%",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  bgImage: {
    height: "100%",
    width: "100%",
  },

  title: {
    color: "white",
    textAlign: "center",
    fontFamily: "open-sans-bold",
    fontSize: 18,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
});
