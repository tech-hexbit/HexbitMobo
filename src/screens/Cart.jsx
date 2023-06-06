import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

// Components
import Header from "../Components/Cart/Header";
import InpOne from "../Components/Cart/InpOne";

// img
import img from "./../../assets/Cart/cartGroceries.png";

const Cart = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={CartCss.mDiv}>
        <Header Header="SETUP YOUR STORE" img={img} />
        <InpOne />
      </View>
    </ScrollView>
  );
};

const CartCss = StyleSheet.create({
  mDiv: {
    flexGrow: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Cart;
