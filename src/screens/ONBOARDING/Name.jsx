import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

// Components
import Header from "../../Components/ONBOARDING/Header";
import Path from "../../Components/ONBOARDING/Path";

// theme
import { COLORS } from "../../constants/theme";

// img
import img from "./../../../assets/Login/name.png";

const Name = () => {
  const navigation = useNavigation();
  return (
    <View style={NameCss.mDIv}>
      <Header true={false} msg="Enter your Details" />
      <Path img={img} pos={3} />
      <Text style={NameCss.Enter}>Enter your Name</Text>
      <TextInput style={NameCss.inpNumber} placeholder="Name" />
      <LinearGradient
        start={{ x: 0, y: 0.75 }}
        end={{ x: 1, y: 0.25 }}
        colors={["#BB14E2", "#161FE4"]}
        style={NameCss.button}
      >
        <Text
          style={NameCss.SendOTP}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          Next
        </Text>
      </LinearGradient>
    </View>
  );
};

const NameCss = StyleSheet.create({
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
    marginBottom: 20,
  },
  button: {
    borderRadius: 10,
    paddingTop: 14,
    paddingBottom: 14,
    width: "70%",
  },
  SendOTP: {
    color: "#fff",
    fontWeight: 600,
    fontSize: 20,
    textAlign: "center",
  },
});

export default Name;
