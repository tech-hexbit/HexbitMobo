import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";

// Components
import Header from "../Components/Cart/Header";
import InpOne from "../Components/Cart/InpOne";
import InpTwo from "../Components/Cart/InpTwo";

// img
import img from "./../../assets/Cart/cartGroceries.png";

const Cart = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={CartCss.mDiv}>
        <Header Header="SETUP YOUR STORE" />
        <Image source={img} style={CartCss.img} />
        <InpOne />
        <InpTwo />
        <Text>Cart</Text>
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
  img: {
    width: 200,
    height: 200,
  },
});

export default Cart;
