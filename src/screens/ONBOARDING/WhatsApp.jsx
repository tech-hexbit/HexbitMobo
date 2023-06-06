import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";

// Components
import Header from "../../Components/ONBOARDING/Header";

// theme
import { COLORS } from "../../constants/theme";

// img
import img from "./../../../assets/Login/WhatsApp.png";

const WhatsApp = () => {
  return (
    <View style={WhatsAppCss.mDIv}>
      <Header true={true} msg="Enter your Details" />
      <Image source={img} style={WhatsAppCss.img} />
      <Text style={WhatsAppCss.Enter}>Enter your WhatsApp number:</Text>
      <TextInput
        style={WhatsAppCss.inpNumber}
        // placeholder="Enter your WhatsApp number"
        keyboardType="numeric"
      />
      <Text>WhatsApp</Text>
    </View>
  );
};

const WhatsAppCss = StyleSheet.create({
  mDIv: {
    flexGrow: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "80%",
    height: "30%",
    marginBottom: 20,
  },
  Enter: {
    width: "100%",
    paddingLeft: 44,
    marginBottom: 30,
    color: COLORS.primary,
    fontWeight: 700,
    fontSize: 21,
  },
  inpNumber: {
    padding: 12,
    borderColor: "#6B4EFF",
    borderWidth: 2,
    borderRadius: 10,
    width: "80%",
  },
});

export default WhatsApp;
