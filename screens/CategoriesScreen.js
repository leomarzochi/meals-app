import React from "react";
import {
  StyleSheet,
  FlatList,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryListTile from "../components/CategoryListTile";

const CategoriesScreen = ({ navigation }) => {
  const categoryListItem = (itemData) => {
    return (
      <CategoryListTile
        itemData={itemData.item}
        onSelect={() =>
          navigation.navigate("Category", {
            category: itemData.item,
          })
        }
      />
    );
  };

  return (
    <FlatList data={CATEGORIES} numColumns={2} renderItem={categoryListItem} />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
