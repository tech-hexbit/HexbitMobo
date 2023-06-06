import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const InpOne = () => {
  return (
    <View style={InpOneCss.imp1View}>
      <Text style={InpOneCss.StoreName}>Store Name</Text>
      <TextInput style={InpOneCss.inpNumber} placeholder="ABC Store" />
    </View>
  );
};

const InpOneCss = StyleSheet.create({
  imp1View: {
    width: "80%",
  },
  StoreName: {
    fontWeight: 600,
    fontSize: 20,
  },
  inpNumber: {},
});

export default InpOne;
