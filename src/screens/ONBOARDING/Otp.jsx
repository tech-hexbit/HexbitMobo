import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";

// Components
import Header from "../../Components/ONBOARDING/Header";

// img
import img from "./../../../assets/Login/otp.png";

const Otp = () => {
  return (
    <View>
      <Header true={true} msg="Enter your Details" />
      <Text>Otp</Text>
      <Image source={img} style={OtpCss.img} />
    </View>
  );
};

const OtpCss = StyleSheet.create({
  img: {
    width: "80%",
    height: "30%",
    marginBottom: 20,
  },
});

export default Otp;
