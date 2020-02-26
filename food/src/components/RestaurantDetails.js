import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const RestaurantDetails = ({ restaurant }) => {
  return (
    <View style={styles.containerStyle}>
      <Image
        style={styles.imageStyle}
        source={{
          uri:
            restaurant.thumb === ""
              ? "https://media.gettyimages.com/photos/authentic-indian-food-picture-id639389404?s=612x612"
              : restaurant.thumb
        }}
      />
      <Text style={styles.nameStyle}>{restaurant.name}</Text>
      <Text style={styles.reviewsStyle}>
        {restaurant.user_rating.aggregate_rating} Stars,{" "}
        {restaurant.all_reviews_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 15
  },
  imageStyle: {
    width: 250,
    height: 200,
    borderRadius: 5,
    marginBottom: 5
  },
  nameStyle: {
    fontWeight: "bold"
  },
  reviewsStyle: {
    color: "grey"
  }
});

export default RestaurantDetails;
