import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants/theme";

const Sales = () => {
  return (
    <View style={SalesCss.mDiv}>
      <Text>Sales</Text>
    </View>
  );
};

const SalesCss = StyleSheet.create({
  mDiv: {
    margin: 20,
  },
});

export default Sales;
