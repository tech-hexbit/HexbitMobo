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
        <Activity amt="65" status="TOTAL ORDERS" />
        <Activity amt="65" status="SHIPPED" />
      </View>
      <View style={SalesCss.ActivityRow}>
        <Activity amt="65" status="PACKED" />
        <Activity amt="65" status="DELIVERED" />
      </View>
    </View>
  );
};

export default Sales;
