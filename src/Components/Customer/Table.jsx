import { View, Text, Image } from "react-native";
import React from "react";

// style
import TableCss from "./Css/TableCss";

// img
import arrow from "./../../../assets/Customer/arrow.png";

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
        <View style={TableCss.tableCell2}>
          <Text style={TableCss.tableCellText}>₹564</Text>
          <Image source={arrow} style={TableCss.awr} />
        </View>
      </View>
    </View>
  );
};

export default Table;
