import { View, Text } from "react-native";
import React from "react";

// style
import BankCss from "./Css/BankCss";

const Bank = () => {
  return (
    <View style={BankCss.mDiv}>
      <Text style={BankCss.BankDetails}>Bank Details</Text>

      <View>
        <View style={BankCss.dataViewBlock}>
          <Text style={BankCss.title}>State Bank of India</Text>
        </View>
        <View style={BankCss.dataViewBlock}>
          <Text style={BankCss.title}>Account Name: </Text>
          <Text style={BankCss.data}>06401450000560</Text>
        </View>
        <View style={BankCss.dataViewBlock}>
          <Text style={BankCss.title}>IFSC Code: </Text>
          <Text style={BankCss.data}>SBIN0003951</Text>
        </View>
      </View>
    </View>
  );
};

export default Bank;
