import { View, Text, Image, TextInput } from "react-native";
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
    </View>
  );
};

export default LoginMain;
