import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.textInputStyle}
        value={name}
        onChangeText={newName => setName(newName)}
      />
      <Text>
        {name.length < 5
          ? "Password must be greater than 5 characters"
          : "That is a valid password"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    paddingLeft: 5
  }
});

export default TextScreen;
