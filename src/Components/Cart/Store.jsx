import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

// components
import StoreHeader from "./StoreHeader";
import ProductCart from "./ProductCart";

const Store = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <StoreHeader true={true} title="MyStore" />
        <Text style={StoreCss.Products}>Products</Text>
        <View style={StoreCss.ProductsGrid}>
          <ProductCart
            name="Product Name"
            dec="Filler text is text that shares some characteristics of a real written
          text, but is random."
            price={500}
          />
          <ProductCart
            name="Product Name"
            dec="Filler text is text that shares some characteristics of a real written
          text, but is random."
            price={500}
          />
          <ProductCart
            name="Product Name"
            dec="Filler text is text that shares some characteristics of a real written
        text, but is random."
            price={500}
          />
          <ProductCart
            name="Product Name"
            dec="Filler text is text that shares some characteristics of a real written
        text, but is random."
            price={500}
          />
        </View>
      </View>
    </ScrollView>
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
    gap: 10,
  },
});

export default Store;
