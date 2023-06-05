import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

// theme
import { COLORS } from "../constants/theme";

// img
import img1 from "./../../assets/Login/logo.png";
import img2 from "./../../assets/Login/Cash Payment-bro 1.png";

const Login = () => {
  return (
    <View style={LoginCss.mDIv}>
      <Image source={img1} />
      <Image source={img2} />
      <Text style={LoginCss.Sell}>Sell Smarter,</Text>
      <Text style={LoginCss.Sell}>Sell Faster</Text>

      <Text style={LoginCss.GetStarted}>Get Started</Text>
    </View>
  );
};

const LoginCss = StyleSheet.create({
  mDIv: {
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  Sell: {
    fontWeight: 700,
    fontSize: 30,
    color: "#fff",
    marginBottom: 60,
  },
  GetStarted: {
    backgroundColor: "#fff",
    color: COLORS.primary,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 67,
    paddingRight: 60,
    borderRadius: 10,
    fontWeight: 600,
    fontSize: 20,
  },
});

export default Login;
