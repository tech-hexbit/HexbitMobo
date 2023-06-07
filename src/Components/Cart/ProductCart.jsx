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
        <Text style={ProductCartCss.name}>{props.name}</Text>
        <Text style={ProductCartCss.dec}>{props.dec}</Text>
        <Text style={ProductCartCss.price}>PRICE: ₹ {props.price}</Text>
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
    justifyContent: "space-between",
    gap: 10,
    borderWidth: 1,
    borderColor: "#d3d3d3",
  },
  leftDiv: {
    width: "32%",
  },
  rightDiv: {
    width: "66%",
  },
  dec: {
    color: "#626262",
    textAlign: "justify",
    fontWeight: 400,
    fontSize: 14,
    marginBottom: 5,
  },
  price: {
    color: "#626262",
    textAlign: "justify",
    fontWeight: 700,
    fontSize: 14,
    marginBottom: 5,
  },
  name: {
    color: "#350b5e",
    fontWeight: 600,
    fontSize: 18,
    marginBottom: 5,
  },
});

export default ProductCart;
