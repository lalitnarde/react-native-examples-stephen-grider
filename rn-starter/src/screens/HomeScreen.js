import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello</Text>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("ListScreen")}
        title="Go to List Demo"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Component")}
        title="Go to Components demo"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("ImageScreen")}
        title="Go to Image demo"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("CounterScreen")}
        title="Go to Counter demo"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("ColorScreen")}
        title="Go to Color demo"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("SquareScreen")}
        title="Go to SquareScreen demo"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("TextScreen")}
        title="Go to Input Text demo"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("BoxScreen")}
        title="Go to BoxScreen demo"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("FlexScreen")}
        title="Go to FlexScreen demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  button: {
    marginBottom: 50
  }
});

export default HomeScreen;
