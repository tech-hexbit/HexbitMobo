import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

// components
import Header from "./../Components/Header";
import Sales from "./../Components/Order/Sales";
import InventoryC from "./../Components/Order/Inventory";

// theme
import { COLORS } from "../constants/theme";

// style
import InventoryCss from "../Components/Order/Css/InventoryCss";

const Inventory = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={InventoryCss.mDiv}>
        <View>
          <Header pageName="Orders" />
          <Sales />
        </View>
        <InventoryC />
      </View>
    </ScrollView>
  );
};

export default Inventory;
