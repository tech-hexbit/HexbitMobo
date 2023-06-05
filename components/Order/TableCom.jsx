import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Table, Row, Rows, Col } from "react-native-table-component";
// theme
import { COLORS, SIZES } from "../../constants/theme";

const TableCom = () => {
  const [tableHead, settableHead] = useState([
    "Date",
    "Order Number",
    "Status",
    "Amount",
  ]);

  const [tableData, settableData] = useState([
    ["04 Aug 2023", "#6745867", "Shipped", "645"],
    ["04 Aug 2023", "#6745867", "Shipped", "564"],
    ["04 Aug 2023", "#6745867", "Shipped", "456"],
    ["04 Aug 2023", "#6745867", "Shipped", "564"],
    ["04 Aug 2023", "#6745867", "Shipped", "564"],
    ["04 Aug 2023", "#6745867", "Shipped", "564"],
  ]);

  return (
    <ScrollView vertical={true}>
      <View style={TableCss.container}>
        <Table>
          <Row
            data={tableHead}
            style={TableCss.head}
            textStyle={TableCss.text1}
          />
          <Rows
            data={tableData}
            style={TableCss.head2}
            textStyle={TableCss.text2}
          />
        </Table>
      </View>
    </ScrollView>
  );
};

const TableCss = StyleSheet.create({
  container: {
    // padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
  },
  head: {
    padding: 5,
    borderColor: "black",
    borderBottomWidth: 1,
  },
  head2: {
    padding: 20,
    borderColor: "black",
    borderBottomWidth: 1,
  },
  text1: {
    textAlign: "center",
    color: COLORS.primary,
    fontWeight: 500,
    fontSize: 14,
  },
  text2: {
    textAlign: "center",
  },
});

export default TableCom;
