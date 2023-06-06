import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const InpOne = () => {
  return (
    <View>
      <Text>Store Name</Text>
      <TextInput style={InpOneCss.inpNumber} placeholder="ABC Store" />
    </View>
  );
};

const InpOneCss = StyleSheet.create({
  inpNumber: {},
});

export default InpOne;
