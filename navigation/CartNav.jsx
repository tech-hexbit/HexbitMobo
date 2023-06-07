import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import InpTwo from "./../src/Components/Cart/InpTwo";
import StoreFinal from "./../src/Components/Cart/StoreFinal";
import Store from "./../src/Components/Cart/Store";
import AddProduct from "./../src/Components/Cart/AddProduct";
import Edit from "./../src/Components/Cart/Edit";
import Cart from "./../src/screens/Cart";

export default function CartNav() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="InpTwo" component={InpTwo} />
        <Stack.Screen name="StoreFinal" component={StoreFinal} />
        <Stack.Screen name="Store" component={Store} />
      </Stack.Navigator>
    </>
  );
}
