import { View, Text, StyleSheet } from "react-native";
import React from "react";

// theme
import { COLORS } from "../constants/theme";

// img
import img1 from "./../../assets/Login/logo.png";
import img2 from "./../../assets/Login/Cash Payment-bro 1.png";

const Login = () => {
  return (
    <View style={LoginCss.mDIv}>
      <Text>Login</Text>
    </View>
  );
};

const LoginCss = StyleSheet.create({
  mDIv: {
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;
