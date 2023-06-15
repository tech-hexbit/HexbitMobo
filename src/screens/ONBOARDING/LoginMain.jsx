import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

// style
import LMCss from "./Css/LMCss";

// img
import img1 from "./../../../assets/Login/logo.png";

const LoginMain = () => {
  const [showNum, setNum] = useState("");
  const [showEmail, setEmail] = useState("");
  const [showError, setError] = useState("");

  const navigation = useNavigation();

  const handleButtonPress = async () => {
    if (showNum !== "" && showEmail !== "") {
      setError("");
      console.log(showNum);
      console.log(showEmail);
    } else {
      setError("Please Fill All the Details");
    }
  };
  return (
    <View style={LMCss.mDIv}>
      <Image source={img1} />

      <View style={LMCss.MDiv}>
        <TextInput
          style={LMCss.LoginText1}
          placeholder="WhatsApp Number"
          placeholderTextColor="#717171"
          onChangeText={(txt) => {
            setNum(txt);
          }}
        />
        <TextInput
          style={LMCss.LoginText2}
          placeholder="Email"
          placeholderTextColor="#717171"
          onChangeText={(txt) => {
            setEmail(txt);
          }}
        />
      </View>

      <Text style={LMCss.errorMsg}>
        {showError.length > 0 ? showError : ""}
      </Text>

      <TouchableOpacity onPress={handleButtonPress}>
        <Text style={LMCss.GetStarted}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("WhatsApp");
        }}
      >
        <Text style={LMCss.Already}>Create a new Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginMain;
