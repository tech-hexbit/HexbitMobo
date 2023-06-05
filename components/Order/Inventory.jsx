import React from "react";
import { View, Text, StyleSheet } from "react-native";

// theme
import { COLORS, SIZES } from "../../constants/theme";

const Inventory = () => {
  return (
    <View>
      <Text style={InventoryCss.StatusText}>Inventory Status</Text>
    </View>
  );
};

const InventoryCss = StyleSheet.create({
  StatusText: {},
});

export default Inventory;
