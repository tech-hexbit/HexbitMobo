import { View, Text } from "react-native";
import React from "react";

// components
import StoreHeader from "./StoreHeader";

const Store = () => {
  return (
    <View>
      <StoreHeader true={true} title="MyStore" />
      <Text>Store</Text>
    </View>
  );
};

export default Store;
