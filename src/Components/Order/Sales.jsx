import React from "react";
import { View, Text, StyleSheet } from "react-native";

// components
import Activity from "./Activity";

// style
import SalesCss from "./Css/SalesCss";

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

export default Sales;
