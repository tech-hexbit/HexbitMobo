import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ProductCart = () => {
  return (
    <View style={ProductCartCss.mDiv}>
      <Text>ProductCart</Text>
    </View>
  );
};

const ProductCartCss = StyleSheet.create({
  mDiv: {
    width: "90%",
    backgroundColor: "red",
    borderRadius: 10,
  },
});

export default ProductCart;
