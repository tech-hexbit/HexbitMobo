import React from "react";
import { View, Text, Image } from "react-native";

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
