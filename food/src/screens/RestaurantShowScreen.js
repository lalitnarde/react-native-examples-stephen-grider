import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import zomato from "../api/zomato";
import { FlatList } from "react-native-gesture-handler";

const RestaurantShowScreen = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState(null);
  const id = navigation.getParam("id");

  console.log(restaurant);

  const getRestaurant = async id => {
    const response = await zomato.get("/restaurant", {
      params: {
        res_id: id
      }
    });
    setRestaurant(response.data);
  };
  useEffect(() => {
    getRestaurant(id);
  }, []);

  if (!restaurant) return null;

  return (
    <View>
      <Text>{restaurant.name}</Text>
      {/* <FlatList
        data={restaurant.photos}
        keyExtractor={photo => photo.thumb_url}
        renderItem={({ item }) => {
          return (
            <Image
              style={styles.imageStyle}
              source={{ uri: item.photo.thumb_url }}
            />
          );
        }}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 300
  }
});

export default RestaurantShowScreen;
