import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import Profile from "./../src/screens/Profile";
import SwitchStore from "./../src/Components/Profile/SwitchStore";
import Cart from "./../src/screens/Cart";
import InpTwo from "./../src/Components/Cart/InpTwo";
import StoreFinal from "./../src/Components/Cart/StoreFinal";

export default function CartNav() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="ProfileMain" component={Profile} />
        <Stack.Screen name="SwitchStore" component={SwitchStore} />
        <Stack.Screen name="CartMainPro" component={Cart} />
        <Stack.Screen name="InpTwoPro" component={InpTwo} />
        <Stack.Screen name="StoreFinalPro" component={StoreFinal} />
      </Stack.Navigator>
    </>
  );
}
