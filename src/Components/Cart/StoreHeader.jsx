import { View, Text, StyleSheet } from "react-native";
import React from "react";

// theme
import { COLORS } from "../../constants/theme";

const StoreHeader = (props) => {
  return (
    <View style={StoreHeaderCss.mDiv}>
      {props.true === true ? (
        <Text style={StoreHeaderCss.Welcome}>Welcome to,</Text>
      ) : (
        ""
      )}
      <Text style={StoreHeaderCss.Hexbit}>Hexbit.io</Text>
    </View>
  );
};

const StoreHeaderCss = StyleSheet.create({
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

export default StoreHeader;
