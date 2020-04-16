import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

const CategoryListTile = ({ itemData, onSelect }) => {
  let TileEffectType = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TileEffectType = TouchableNativeFeedback;
  }

  return (
    <View style={styles.listItem}>
      <TileEffectType onPress={onSelect}>
        <View style={{ ...styles.container, backgroundColor: itemData.color }}>
          <Text style={styles.title} numberOfLines={2}>
            {itemData.title}
          </Text>
        </View>
      </TileEffectType>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    margin: 20,
    height: 150,
    overflow: 'hidden',
    borderRadius: 20,
    elevation: 3,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 15,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
    textAlign: "right",
  },
});

export default CategoryListTile;
