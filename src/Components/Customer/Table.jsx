import { View, Text } from "react-native";
import React from "react";

// style
import TableCss from "./Css/TableCss";

const Table = () => {
  return (
    <View style={TableCss.mView}>
      <View style={TableCss.tableRow}>
        <Text style={TableCss.headerCell}>Name</Text>
        <Text style={TableCss.headerCell}>Group</Text>
        <Text style={TableCss.headerCell}>Amount Spent</Text>
      </View>

      <View style={TableCss.tableRow}>
        <Text style={TableCss.tableCell}>Devesh</Text>
        <Text style={TableCss.tableCell}>Group 2</Text>
        <Text style={TableCss.tableCell}>₹564</Text>
      </View>
    </View>
  );
};

export default Table;
