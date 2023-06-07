import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

// components
import StoreHeader from "./StoreHeader";
import ProductCart from "./ProductCart";

const Store = () => {
  const navigation = useNavigation();
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
            Order={200}
            InStore={326}
          />
          <ProductCart
            name="Product Name"
            dec="Filler text is text that shares some characteristics of a real written
          text, but is random."
            price={500}
            Order={200}
            InStore={326}
          />
          <ProductCart
            name="Product Name"
            dec="Filler text is text that shares some characteristics of a real written
        text, but is random."
            price={500}
            Order={200}
            InStore={326}
          />
          <ProductCart
            name="Product Name"
            dec="Filler text is text that shares some characteristics of a real written
        text, but is random."
            price={500}
            Order={200}
            InStore={326}
          />
        </View>
        <View style={StoreCss.Addpod}>
          <Text style={StoreCss.AddProduct}>Add Product</Text>
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
    marginBottom: 10,
  },
  Addpod: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  AddProduct: {
    color: "#fff",
    backgroundColor: "#622AC3",
    borderRadius: 10,
    paddingHorizontal: 22,
    paddingVertical: 12,
    marginBottom: 10,
  },
});

export default Store;
