import React from "react";
import { View, Text, StyleSheet } from "react-native";

// components
import Activity from "./Activity";

// theme
import { COLORS, SIZES } from "../../constants/theme";

const Sales = () => {
  return (
    <View>
      <Text style={SalesCss.SalesText}>Sales Activity</Text>
      <View style={SalesCss.ActivityRow}>
        <Activity amt="345" status="To be packed" />
        <Activity amt="345" status="To be packed" />
      </View>
      <View style={SalesCss.ActivityRow}>
        <Activity amt="345" status="To be packed" />
        <Activity amt="345" status="To be packed" />
      </View>
    </View>
  );
};

const SalesCss = StyleSheet.create({
  SalesText: {
    color: COLORS.primary,
    fontWeight: 900,
    fontSize: 20,
    marginTop: 15,
    marginBottom: 15,
  },
  ActivityRow: {
    // flex: 3,
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
});

export default Sales;
