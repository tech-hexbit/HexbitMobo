import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

// theme
import { COLORS } from "../../constants/theme";

const Header = (props) => {
  return (
    <View>
      <Text style={HCss.HeaderText}>{props.Header}</Text>
      <Image source={props.img} style={HCss.img} />
    </View>
  );
};

const HCss = StyleSheet.create({
  HeaderText: {
    fontSize: 20,
    fontWeight: 900,
    textAlign: "center",
    marginTop: 20,
    color: COLORS.primary,
  },
  img: {
    width: 200,
    height: 200,
  },
});

export default Header;
