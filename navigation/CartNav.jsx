import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import InpTwo from "./../src/Components/Cart/InpTwo";
import Cart from "./../src/screens/Cart";

export default function CartNav() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="InpTwo" component={InpTwo} />
      </Stack.Navigator>
    </>
  );
}
