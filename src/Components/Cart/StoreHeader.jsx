import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import React from "react";

// theme
import { COLORS } from "../../constants/theme";

// img
import img from "./../../../assets/Cart/search.png";

const StoreHeader = (props) => {
  return (
    <View style={StoreHeaderCss.mDiv}>
      {props.true === true ? (
        <Text style={StoreHeaderCss.Welcome}>Hexbit.io</Text>
      ) : (
        ""
      )}
      <Text style={StoreHeaderCss.Hexbit}>{props.title}</Text>

      <View style={StoreHeaderCss.inpView}>
        <Image source={img} />
        <TextInput style={StoreHeaderCss.inp}></TextInput>
      </View>
    </View>
  );
};

const StoreHeaderCss = StyleSheet.create({
  mDiv: {
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 20,
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
  inpView: {
    marginTop: 20,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  inpNumber: {},
});

export default StoreHeader;
