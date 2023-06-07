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
    padding: 15,

    shadowColor: "red",
    shadowOffset: { width: -2, height: 40 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default ProductCart;
