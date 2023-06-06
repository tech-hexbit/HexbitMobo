import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

// Components
import Header from "./Header";

// img
import img from "./../../../assets/Cart/cartGroceries.png";

const InpTwo = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={InpTwoCss.mDiv}>
        <Header Header="SETUP YOUR STORE" img={img} />

        <Text style={InpTwoCss.t1}>Tell us more about your store</Text>
        <Text style={InpTwoCss.t2}>
          Add a short description about your store
        </Text>

        <Text style={InpTwoCss.StoreName}>Store Description</Text>
      </View>
    </ScrollView>
  );
};

const InpTwoCss = StyleSheet.create({
  mDiv: {
    flexGrow: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  t1: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 900,
    color: "#350B5E",
  },
  t2: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 16,
    fontWeight: 500,
    color: "#7b579f",
  },
});

export default InpTwo;
