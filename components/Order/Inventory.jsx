import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
  },
  ViewRow: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  txt1: {
    color: "white",
    padding: 7,
    fontWeight: 500,
    fontSize: 16,
    width: 176,
    // backgroundColor: "red",
    borderColor: "white",
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  txt2: {
    color: "white",
    padding: 7,
    fontWeight: 500,
    fontSize: 16,
    width: 176,
    // backgroundColor: "red",
    borderColor: "white",
    borderBottomWidth: 1,

    // width: 50,
    // backgroundColor: "red",
  },
  txt3: {
    color: "white",
  },
  txt4: {
    color: "white",
  },
});

export default Inventory;
