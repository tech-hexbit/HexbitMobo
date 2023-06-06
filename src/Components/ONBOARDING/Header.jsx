import { View, Text, StyleSheet } from "react-native";
import React from "react";

// theme
import { COLORS } from "../../constants/theme";

const Header = (props) => {
  return (
    <View style={HeaderCss.mDiv}>
      {props.true === true ? (
        <Text style={HeaderCss.Welcome}>Welcome to,</Text>
      ) : (
        ""
      )}
      <Text style={HeaderCss.Hexbit}>Hexbit.io</Text>
    </View>
  );
};

const HeaderCss = StyleSheet.create({
  mDiv: {
    width: "100%",
    paddingLeft: 44,
    marginBottom: 30,
  },
  Welcome: {
    color: COLORS.primary,
    fontSize: 31,
    fontWeight: 400,
  },
  Hexbit: {
    color: COLORS.primary,
    fontSize: 31,
    fontWeight: 900,
  },
});

export default Header;
