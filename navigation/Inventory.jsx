import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import Inventory from "../src/screens/Home";
import ProductPage from "../src/Components/Inventory/ProductPage";

export default function CartNav() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="InventoryScreen" component={Inventory} />
        <Stack.Screen name="ProductPage" component={ProductPage} />
      </Stack.Navigator>
    </>
  );
}
