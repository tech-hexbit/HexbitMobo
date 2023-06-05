import React from "react";
import { View, Text, StyleSheet } from "react-native";

// components
import Table from "./TableCom";

// theme
import { COLORS, SIZES } from "../../constants/theme";

const Inventory = () => {
  return (
    <View>
      <Text style={InventoryCss.StatusText}>Inventory Status</Text>
      <View style={InventoryCss.tabView}>
        <View style={InventoryCss.ViewRow}>
          <Text style={InventoryCss.txt1}>QUANTITY IN HAND</Text>
          <Text style={InventoryCss.txt2}>5768</Text>
        </View>
        <View style={InventoryCss.ViewRow}>
          <Text style={InventoryCss.txt3}>QUANTITY TO BE RECEIVED</Text>
          <Text style={InventoryCss.txt4}>674</Text>
        </View>
      </View>
      <View style={InventoryCss.toggleBtn}>
        <Text style={InventoryCss.All}>All</Text>
        <Text style={InventoryCss.Shipped}>Shipped</Text>
        <Text style={InventoryCss.Cancelled}>Cancelled</Text>
        <Text style={InventoryCss.On}>On Hold</Text>
      </View>
      <Table />
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
  tabView: {
    backgroundColor: COLORS.ActivityBlock,
    borderRadius: 10,
    marginBottom: 15,
  },
  ViewRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
    paddingLeft: 10,
  },
  txt1: {
    color: "white",
    padding: 12,
    fontWeight: 500,
    fontSize: 16,
    width: 230,
    borderColor: "white",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    marginTop: 10,
  },
  txt2: {
    color: "white",
    padding: 12,
    fontWeight: 500,
    fontSize: 16,
    width: 120,
    borderColor: "white",
    borderBottomWidth: 1,
    marginTop: 10,
  },
  txt3: {
    color: "white",
    padding: 12,
    fontWeight: 500,
    fontSize: 16,
    width: 230,
    borderColor: "white",
    borderRightWidth: 1,
    marginBottom: 10,
  },
  txt4: {
    color: "white",
    padding: 12,
    fontWeight: 500,
    fontSize: 16,
    borderColor: "white",
    marginBottom: 10,
  },
  toggleBtn: {
    marginTop: 5,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
  },
  All: {
    color: COLORS.primary,
  },
  Shipped: {
    color: "#216445",
  },
  Cancelled: {
    color: "#882830",
  },
  On: {
    color: "#8f9d4b",
  },
});

export default Inventory;
