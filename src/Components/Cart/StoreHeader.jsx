import { View, Text, StyleSheet } from "react-native";
import React from "react";

// theme
import { COLORS } from "../../constants/theme";

const StoreHeader = (props) => {
  return (
    <View style={StoreHeaderCss.mDiv}>
      {props.true === true ? (
        <Text style={StoreHeaderCss.Welcome}>Hexbit.io</Text>
      ) : (
        ""
      )}
      <Text style={StoreHeaderCss.Hexbit}>{props.title}</Text>
    </View>
  );
};

const StoreHeaderCss = StyleSheet.create({
  mDiv: {
    width: "100%",
    marginTop: 20,
    paddingLeft: 20,
    marginBottom: 30,
  },
  Welcome: {
    color: COLORS.primary,
    fontSize: 20,
    fontWeight: 900,
  },
  Hexbit: {
    color: COLORS.primary,
    fontSize: 33,
    fontWeight: 900,
  },
});

export default StoreHeader;
