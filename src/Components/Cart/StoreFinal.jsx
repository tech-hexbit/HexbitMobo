import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// img
import img from "./../../../assets/Cart/StoreFinal.png";

const StoreFinal = () => {
  return (
    <View style={SFCss.mDiv}>
      <Image source={img} style={SFCss.img} />
      <Text>Congrats!! Your Store has been successfully created</Text>
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
  img: {
    width: 350,
    height: 300,
  },
});

export default StoreFinal;
