import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

// style
import HCss from "./Css/HCss";

const Header = (props) => {
  return (
    <View>
      <Text style={HCss.HeaderText}>{props.Header}</Text>
      <Image source={props.img} style={HCss.img} />
    </View>
  );
};

export default Header;
