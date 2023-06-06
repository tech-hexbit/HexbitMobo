import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image } from "react-native";

// theme
import { COLORS } from "../../constants/theme";

// img
import img1 from "./../../../assets/Login/logo.png";
import img2 from "./../../../assets/Login/Cash.png";

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={LoginCss.mDIv}>
      <Image source={img1} />
      <Image source={img2} style={LoginCss.img2} />

      <View>
        <Text style={LoginCss.Sell}>Sell Smarter,</Text>
        <Text style={LoginCss.Sell}>Sell Faster</Text>
      </View>

      <Text
        style={LoginCss.GetStarted}
        onPress={() => {
          navigation.navigate("WhatsApp");
        }}
      >
        Get Started
      </Text>
    </View>
  );
};

const LoginCss = StyleSheet.create({
  mDIv: {
    flexGrow: 1,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  img2: {
    marginTop: 30,
    marginBottom: 10,
  },
  Sell: {
    fontWeight: 700,
    fontSize: 30,
    color: "#fff",
    textAlign: "left",
  },
  GetStarted: {
    marginTop: 60,
    backgroundColor: "#fff",
    color: COLORS.primary,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 67,
    paddingRight: 60,
    borderRadius: 10,
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 30,
  },
});

export default Login;
