import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";

// Components
import Header from "../../Components/ONBOARDING/Header";

// theme
import { COLORS } from "../../constants/theme";

// img
import img from "./../../../assets/Login/otp.png";

const Otp = () => {
  return (
    <View style={OtpCss.mDIv}>
      <Header true={true} msg="Enter your Details" />
      <Image source={img} style={OtpCss.img} />
      <Text style={OtpCss.Enter}>Enter the OTP</Text>
      <View style={OtpCss.ViewNumber}>
        <TextInput style={OtpCss.inpNumber} keyboardType="numeric" />
        <TextInput style={OtpCss.inpNumber} keyboardType="numeric" />
        <TextInput style={OtpCss.inpNumber} keyboardType="numeric" />
        <TextInput style={OtpCss.inpNumber} keyboardType="numeric" />
      </View>

      <Text>Otp</Text>
    </View>
  );
};

const OtpCss = StyleSheet.create({
  mDIv: {
    flexGrow: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  Enter: {
    marginBottom: 30,
    color: COLORS.primary,
    fontWeight: 700,
    fontSize: 21,
  },
  img: {
    width: "80%",
    height: "30%",
    marginBottom: 20,
  },
  ViewNumber: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  inpNumber: {
    padding: 12,
    borderColor: "#6B4EFF",
    borderWidth: 2,
    borderRadius: 10,
    width: 50,
    height: 50,
    marginBottom: 20,
  },
});

export default Otp;
