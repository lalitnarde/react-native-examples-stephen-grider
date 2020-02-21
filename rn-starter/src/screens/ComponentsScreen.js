import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>This is the component screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
