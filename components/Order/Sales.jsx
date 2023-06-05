import React from "react";
import { View, Text, StyleSheet } from "react-native";

// components
import Activity from "./Activity";

// theme
import { COLORS, SIZES } from "../../constants/theme";

const Sales = () => {
  return (
    <View style={SalesCss.mDiv}>
      <Text style={SalesCss.SalesText}>Sales Activity</Text>
      <View>
        <Activity amt="345" status="To be packed" />
        <Activity amt="345" status="To be packed" />
      </View>
      <View>
        <Activity amt="345" status="To be packed" />
        <Activity amt="345" status="To be packed" />
      </View>
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
