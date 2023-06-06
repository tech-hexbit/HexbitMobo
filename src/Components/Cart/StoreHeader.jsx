import { View, Text, StyleSheet, TextInput } from "react-native";
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

      <TextInput style={StoreHeaderCss.inpNumber}></TextInput>
    </View>
  );
};

const StoreHeaderCss = StyleSheet.create({
  mDiv: {
    width: "100%",
    paddingVertical: 20,
    paddingLeft: 20,
    backgroundColor: "#ccceff",
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
