import React from "react";
import { View, Text } from "react-native";

const Activity = (props) => {
  return (
    <View>
      <Text>Hexbit.io</Text>
      <Text>{props.pageName}</Text>
    </View>
  );
};

export default Activity;
