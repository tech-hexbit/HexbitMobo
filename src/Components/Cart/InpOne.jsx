import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

// theme
import { COLORS } from "../../constants/theme";

const InpOne = () => {
  return (
    <View style={InpOneCss.imp1View}>
      <Text style={InpOneCss.StoreName}>Store Name</Text>
      <TextInput style={InpOneCss.inpNumber} placeholder="ABC Store" />

      <Text style={InpOneCss.StoreName}>Store Type</Text>
      <TextInput style={InpOneCss.inpNumber} placeholder="Select Store type" />

      <Text style={InpOneCss.StoreName}>Store Type</Text>
      <TextInput style={InpOneCss.inpNumber} placeholder="Select Store type" />

      <Text style={InpOneCss.StoreName}>Store Type</Text>
      <TextInput style={InpOneCss.inpNumber} placeholder="Select Store type" />
    </View>
  );
};

const InpOneCss = StyleSheet.create({
  imp1View: {
    marginTop: 20,
    width: "80%",
    marginBottom: 20,
  },
  StoreName: {
    color: "#626262",
    fontWeight: 600,
    fontSize: 20,
    marginBottom: 10,
  },
  inpNumber: {
    borderWidth: 1,
    borderColor: COLORS.ActivityBlock,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
});

export default InpOne;
