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
        <Activity amt="65" status="TOTAL ORDERS" num={1} />
        <Activity amt="65" status="SHIPPED" num={2} />
      </View>
      <View style={SalesCss.ActivityRow}>
        <Activity amt="65" status="PACKED" num={3} />
        <Activity amt="65" status="DELIVERED" num={4} />
      </View>
    </View>
  );
};

export default Sales;
