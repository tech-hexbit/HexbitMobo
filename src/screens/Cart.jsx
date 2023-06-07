import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

// Components
import Header from "../Components/Cart/Header";
import InpOne from "../Components/Cart/InpOne";

// img
import img from "./../../assets/Cart/cartGroceries.png";

// style
import CartCss from "../Components/Cart/Css/CartCss";

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

export default Cart;
