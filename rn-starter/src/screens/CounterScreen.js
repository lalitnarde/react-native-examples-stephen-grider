import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          //   counter++;
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Increase"
        onPress={() => {
          //   counter--;
          setCounter(counter - 1);
        }}
        title="Decrease"
      />
      <Text>Current count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
