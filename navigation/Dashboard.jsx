import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import Inventory from "../src/screens/Inventory";
import OrdersPage from "../src/Components/Order/OrdersPage";

export default function CartNav() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="InventoryScreen" component={Inventory} />
        <Stack.Screen name="OrdersPage" component={OrdersPage} />
      </Stack.Navigator>
    </>
  );
}
