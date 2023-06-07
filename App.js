import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import Login from "./src/screens/ONBOARDING/Login";
import Otp from "./src/screens/ONBOARDING/Otp";
import WhatsApp from "./src/screens/ONBOARDING/WhatsApp";
import Name from "./src/screens/ONBOARDING/Name";
import Email from "./src/screens/ONBOARDING/Email";
import Company from "./src/screens/ONBOARDING/Company";
import License from "./src/screens/ONBOARDING/License";
import InpTwo from "./src/Components/Cart/InpTwo";

// Bottom Nav
import BottomNav from "./src/Components/BottomNav";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="WhatsApp" component={WhatsApp} />
          <Stack.Screen name="Otp" component={Otp} />
          <Stack.Screen name="Name" component={Name} />
          <Stack.Screen name="Email" component={Email} />
          <Stack.Screen name="Company" component={Company} />
          <Stack.Screen name="License" component={License} />
          <Stack.Screen name="InpTwo" component={InpTwo} />
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={BottomNav}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
