import React from "react";
import { View, Text, Image } from "react-native";

const ImageDetail = props => {
  console.log(props);
  return (
    <View>
      <Image source={props.imageSource} />
      <Text>Hello {props.title}</Text>
    </View>
  );
};

export default ImageDetail;
