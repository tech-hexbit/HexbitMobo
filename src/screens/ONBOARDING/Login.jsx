import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image } from "react-native";

// theme
import { COLORS } from "../../constants/theme";

// style
import LoginCss from "./Css/LoginCss";

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

export default Login;
