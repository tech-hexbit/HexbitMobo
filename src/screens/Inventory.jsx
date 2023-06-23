import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

// components
import Header from "./../Components/Header";
import Sales from "./../Components/Order/Sales";
import InventoryC from "./../Components/Order/Inventory";

// theme
import { COLORS } from "../constants/theme";

const Inventory = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={sty.mDiv}>
        <Header pageName="Orders" />
        <Sales />
        <InventoryC />
      </View>
    </ScrollView>
  );
};

const sty = StyleSheet.create({
  mDiv: {
    padding: 20,
    backgroundColor: COLORS.bgScreen,
  },
});

export default Inventory;
