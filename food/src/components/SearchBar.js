import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <FontAwesome style={styles.iconStyles} name="search" />
      <TextInput
        style={styles.inputStye}
        placeholder="Search"
        value={term}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10
  },
  iconStyles: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15
  },
  inputStye: {
    flex: 1,
    fontSize: 18
  }
});

export default SearchBar;
