import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";

// style
import LMCss from "./Css/LMCss";

// img
import img1 from "./../../../assets/Login/logo.png";

const LoginMain = () => {
  return (
    <View style={LMCss.mDIv}>
      <Image source={img1} />

      <View style={LMCss.MDiv}>
        <TextInput style={LMCss.LoginText1} />
        <TextInput style={LMCss.LoginText2} />
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("LoginMain");
        }}
      >
        <Text style={LMCss.GetStarted}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginMain;
