import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

// img
import img from "./../../../assets/Cart/pod.png";

const ProductCart = (props) => {
  return (
    <View style={ProductCartCss.insDiv}>
      <View style={ProductCartCss.leftDiv}>
        <Image source={img} />
      </View>
      <View style={ProductCartCss.rightDiv}>
        <Text>Product Name</Text>
        <Text>
          Filler text is text that shares some characteristics of a real written
          text, but is random.
        </Text>
      </View>
      <Text>ProductCart</Text>
    </View>
  );
};

const ProductCartCss = StyleSheet.create({
  insDiv: {
    width: "90%",
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    // flexWrap: "wrap",
    gap: 10,
    borderWidth: 1,
  },
  leftDiv: {
    width: "45%",
  },
  rightDiv: {
    width: "45%",
  },
});

export default ProductCart;
