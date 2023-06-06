import { View, Text, StyleSheet } from "react-native";
import React from "react";

// theme
import { COLORS } from "../../constants/theme";

const Header = (props) => {
  return (
    <View>
      <Text style={HCss.HeaderText}>{props.Header}</Text>
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
});

export default Header;
