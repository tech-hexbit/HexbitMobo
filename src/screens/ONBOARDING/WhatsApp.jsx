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
  ScrollView,
  TouchableOpacity,
} from "react-native";

// axios
import axios from "axios";

// env
import { REACT_NATIVE_BASE_URL } from "@env";

// Components
import Header from "../../Components/ONBOARDING/Header";

// theme
import { COLORS } from "../../constants/theme";

// img
import img from "./../../../assets/Login/WhatsApp.png";

import WhatsAppCss from "./Css/WhatsAppCss";

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

      console.log(REACT_NATIVE_BASE_URL);

      try {
        const res = await axios.post(
          `http://192.168.43.29:8000/api/App/onborading/WhatsAppNumber`,
          data
        );

        if (res.data.exists === false) {
          console.log(res.data);

          console.log("navigate...");
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

export default WhatsApp;
