import React, { useState, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import Cart from "./../src/screens/Cart";
import Edit from "./../src/Components/Cart/Edit";
import Store from "./../src/Components/Cart/Store";
import InpTwo from "./../src/Components/Cart/InpTwo";
import AddProduct from "./../src/Components/Cart/AddProduct";
import StoreFinal from "./../src/Components/Cart/StoreFinal";

// state
import AuthContext from "./../store/auth-context";

export default function CartNav(props) {
  const { WhatsAppNumber } = useContext(AuthContext);

  console.log("AuthContext WhatsAppNumber 📧📧");
  console.log(WhatsAppNumber);
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="CartMain" component={Cart} />
        <Stack.Screen name="InpTwo" component={InpTwo} />
        <Stack.Screen name="StoreFinal" component={StoreFinal} />
        <Stack.Screen name="Store" component={Store} />
        <Stack.Screen name="AddProduct" component={AddProduct} />
        <Stack.Screen name="Edit" component={Edit} />
      </Stack.Navigator>
    </>
  );
}
