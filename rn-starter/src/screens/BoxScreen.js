import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>BoxScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    padding: 3,
    borderColor: "black"
  },
  textStyle: {
    borderWidth: 1,
    margin: 20,
    padding: 5,
    borderColor: "red"
  }
});

export default BoxScreen;
