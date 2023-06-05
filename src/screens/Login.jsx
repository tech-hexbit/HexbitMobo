import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { COLORS } from "../constants/theme";

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
