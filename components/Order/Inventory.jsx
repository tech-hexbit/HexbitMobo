import React from "react";
import { View, Text, StyleSheet } from "react-native";

// theme
import { COLORS, SIZES } from "../../constants/theme";

const Inventory = () => {
  return (
    <View>
      <Text style={InventoryCss.StatusText}>Inventory Status</Text>
      <View style={InventoryCss.tabView}></View>
    </View>
  );
};

const InventoryCss = StyleSheet.create({
  StatusText: {
    color: COLORS.primary,
    fontWeight: 900,
    fontSize: 20,
    marginBottom: 15,
  },
});

export default Inventory;
