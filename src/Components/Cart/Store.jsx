import { View, Text } from "react-native";
import React from "react";

// components
import StoreHeader from "./StoreHeader";
import ProductCart from "./ProductCart";

const Store = () => {
  return (
    <View>
      <StoreHeader true={true} title="MyStore" />
      <ProductCart />
      <Text>Store</Text>
    </View>
  );
};

export default Store;
