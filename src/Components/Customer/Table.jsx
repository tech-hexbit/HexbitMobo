import { View, Text } from "react-native";
import React from "react";

// style
import TableCss from "./Css/TableCss";

const Table = () => {
  return (
    <View style={TableCss.mView}>
      <View style={TableCss.tableRow}>
        <Text style={TableCss.headerCell}>Date</Text>
        <Text style={TableCss.headerCell}>Order No.</Text>
        <Text style={TableCss.headerCell}>Amount</Text>
      </View>
    </View>
  );
};

export default Table;
