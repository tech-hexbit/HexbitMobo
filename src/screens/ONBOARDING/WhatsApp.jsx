import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

// env
import { REACT_NATIVE_BASE_URL } from "@env";

// Components
import Header from "../../Components/ONBOARDING/Header";

// theme
import { COLORS } from "../../constants/theme";

// img
import img from "./../../../assets/Login/WhatsApp.png";

const WhatsApp = () => {
  const [textInputValue, setTextInputValue] = useState("");
  const [showError, setError] = useState("");

  const navigation = useNavigation();

  const handleTextInputChange = (text) => {
    setTextInputValue(text);
  };

  const handleButtonPress = async () => {
    if (textInputValue.length == 10) {
      setError("");

      let data = {
        WhatsAppNumber: textInputValue,
      };

      try {
        const res = await axios.post(
          `${REACT_NATIVE_BASE_URL}/api/App/onborading/WhatsAppNumber`,
          data
        );
        if (res.data.exists === false) {
          console.log(res.data);
          navigation.navigate("Otp", { WhatsAppNumber: `${textInputValue}` });
        } else {
          Alert.alert("Phone Number Already in Use");
        }
      } catch (error) {
        console.log(error);
        setError("Error: An Unexpected Error Happened");
      }
    } else {
      setError("Please Enter A Valid Number");
    }
  };
  return (
    <View style={WhatsAppCss.mDIv}>
      <Header true={true} msg="Enter your Details" />
      <Image source={img} style={WhatsAppCss.img} />
      <Text style={WhatsAppCss.Enter}>Enter your WhatsApp number:</Text>
      <TextInput
        style={WhatsAppCss.inpNumber}
        placeholder="99391 97XXX"
        keyboardType="numeric"
        onChangeText={handleTextInputChange}
      />

      <Text style={WhatsAppCss.errorMsg}>
        {showError.length > 0 ? showError : ""}
      </Text>

      <LinearGradient
        start={{ x: 0, y: 0.75 }}
        end={{ x: 1, y: 0.25 }}
        colors={["#BB14E2", "#161FE4"]}
        style={WhatsAppCss.button}
      >
        <Text
          style={WhatsAppCss.SendOTP}
          // onPress={() => {
          //   navigation.navigate("Otp");
          // }}
          onPress={handleButtonPress}
        >
          Send OTP
        </Text>
      </LinearGradient>
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
  errorMsg: {
    color: "#800000",
    marginBottom: 15,
  },
});

export default WhatsApp;
