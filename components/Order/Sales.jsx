import React from "react";
import { View, Text, StyleSheet } from "react-native";

// theme
import { COLORS, SIZES } from "../../constants/theme";

const Sales = () => {
  return (
    <View style={SalesCss.mDiv}>
      <Text style={SalesCss.SalesText}>Sales Activity</Text>
    </View>
  );
};

const SalesCss = StyleSheet.create({
  mDiv: {
    margin: 20,
  },
  SalesText: {
    color: COLORS.primary,
    fontWeight: 900,
    fontSize: 20,
  },
});

export default Sales;
