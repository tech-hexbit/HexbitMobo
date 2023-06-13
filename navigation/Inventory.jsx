import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import Inventory from "../src/screens/Home";
import ProductPage from "../src/Components/Inventory/ProductPage";
import Bulk from "../src/Components/Inventory/Bulk";

export default function CartNav() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="InventoryScreen" component={Inventory} />
        <Stack.Screen name="ProductPage" component={ProductPage} />
        <Stack.Screen name="Bulk" component={Bulk} />
      </Stack.Navigator>
    </>
  );
}
