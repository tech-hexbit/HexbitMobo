import { View, Text, StyleSheet } from "react-native";
import React from "react";

// components
import StoreHeader from "./StoreHeader";
import ProductCart from "./ProductCart";

const Store = () => {
  return (
    <View>
      <StoreHeader true={true} title="MyStore" />
      <Text style={StoreCss.Products}>Products</Text>
      <View style={StoreCss.ProductsGrid}>
        <ProductCart />
      </View>
    </View>
  );
};

const StoreCss = StyleSheet.create({
  Products: {
    color: "#350B5E",
    fontWeight: 700,
    fontSize: 20,
    marginVertical: 10,
    marginLeft: 20,
  },
  ProductsGrid: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Store;
