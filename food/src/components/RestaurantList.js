import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import RestaurantDetails from "./RestaurantDetails";

const RestaurantList = ({ title, results }) => {
  console.log(results);
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => {
          result.restaurant.id;
        }}
        renderItem={({ item }) => {
          return <RestaurantDetails restaurant={item.restaurant} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5
  },
  containerStyle: {
    marginBottom: 10
  }
});

export default RestaurantList;
