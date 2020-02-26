import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { withNavigation } from "react-navigation";
import RestaurantDetails from "./RestaurantDetails";

const RestaurantList = ({ title, results, navigation }) => {
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
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantShowScreen", {
                  id: item.restaurant.id
                })
              }
            >
              <RestaurantDetails restaurant={item.restaurant} />
            </TouchableOpacity>
          );
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

export default withNavigation(RestaurantList);
