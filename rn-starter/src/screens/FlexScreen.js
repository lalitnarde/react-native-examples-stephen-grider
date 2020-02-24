import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FlexScreen = () => {
  return (
    <View style={styles.parentViewStyle}>
      <View style={styles.viewStyle1}></View>
      <View style={styles.parentViewStyle2}>
        <View style={styles.viewStyle2}></View>
      </View>
      <View style={styles.viewStyle3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentViewStyle: {
    borderWidth: 3,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  parentViewStyle2: {
    height: 100,
    justifyContent: "flex-end"
  },
  viewStyle1: {
    height: 50,
    width: 50,
    backgroundColor: "red"
  },
  viewStyle2: {
    height: 50,
    width: 50,
    backgroundColor: "green"
  },
  viewStyle3: {
    height: 50,
    width: 50,
    backgroundColor: "purple"
  }
});

export default FlexScreen;
