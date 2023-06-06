import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// img
import img from "./../../../assets/Cart/StoreFinal.png";

const StoreFinal = () => {
  return (
    <View style={SFCss.mDiv}>
      <Image source={img} />
      <Text>StoreFinal</Text>
    </View>
  );
};

const SFCss = StyleSheet.create({
  mDiv: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CCCEFF",
  },
});

export default StoreFinal;
