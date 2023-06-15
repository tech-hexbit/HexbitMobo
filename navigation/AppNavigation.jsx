import React from "react";
import { View, StyleSheet } from "react-native";

// screens
import Login from "./../src/screens/ONBOARDING/Login";
import Otp from "./../src/screens/ONBOARDING/Otp";
import WhatsApp from "./../src/screens/ONBOARDING/WhatsApp";
import Name from "./../src/screens/ONBOARDING/Name";
import Email from "./../src/screens/ONBOARDING/Email";
import Company from "./../src/screens/ONBOARDING/Company";
import License from "./../src/screens/ONBOARDING/License";

// Bottom Nav
import BottomNav from "./navigation/BottomNav";

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WhatsApp"
          component={WhatsApp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Otp"
          component={Otp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Name"
          component={Name}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Email"
          component={Email}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Company"
          component={Company}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="License"
          component={License}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={BottomNav}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default AppNavigation;
