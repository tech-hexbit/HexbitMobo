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
        <Text>{props.name}</Text>
        <Text>{props.dec}</Text>
      </View>
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
    borderColor: "#d3d3d3",
  },
  leftDiv: {
    width: "32%",
    backgroundColor: "red",
  },
  rightDiv: {
    width: "68%",
    backgroundColor: "red",
  },
});

export default ProductCart;
