import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";

// theme
import { COLORS, SIZES } from "../../constants/theme";

const Table = () => {
  return (
    <View style={TableCss.container}>
      <Text>Table</Text>
    </View>
  );
};

const TableCss = StyleSheet.create({
  container: {
    // padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
  },
  tableHeader: {},
  tableTitle: {
    textAlign: "center",
    color: COLORS.primary,
  },
});

export default Table;
