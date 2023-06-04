import React from "react";
import { View, Text } from "react-native";

const Header = (props) => {
  return (
    <View>
      <Text style={{ color: "red" }}>Hexbit.io</Text>
      <Text>{props.pageName}</Text>
    </View>
  );
};

export default Header;
