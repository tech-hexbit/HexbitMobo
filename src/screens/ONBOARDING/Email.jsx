import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

// axios
import axios from "axios";

// env
import { REACT_NATIVE_BASE_URL } from "@env";

// Components
import Header from "../../Components/ONBOARDING/Header";
import Path from "../../Components/ONBOARDING/Path";

// theme
import { COLORS } from "../../constants/theme";

// img
import img from "./../../../assets/Login/email.png";

// style
import EmailCss from "./Css/EmailCss";

const Email = (props) => {
  const [showError, setError] = useState("");
  const [load, setLoad] = useState(false);
  const [showVal, setVal] = useState("");

  const navigate = useNavigation();

  const handleButtonPress = async () => {
    if (showVal.length > 0 && showVal.includes("@") && showVal.includes(".")) {
      setLoad(true);

      let data = {
        WhatsAppNumber: props.route.params.WhatsAppNumber,
        feild: "email",
        value: showVal,
      };
      try {
        const res = await axios.post(
          `http://192.168.43.29:8000/api/App/onborading/name&Email`,
          data
        );

        console.log(data);

        if (res.data.status === true) {
          setLoad(false);
          setError("");
          console.log("res.data");
          console.log(res.data);
          navigate.navigate("Company", {
            WhatsAppNumber: `${props.route.params.WhatsAppNumber}`,
          });
        } else {
          setLoad(false);
          setError("Error: Invalid OTP");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setLoad(false);
      setError("Please Enter A Valid Email");
    }
  };

  return (
    <View style={EmailCss.mDIv}>
      <Header true={false} msg="Enter your Details" />
      <Path img={img} pos={2} />
      <Text style={EmailCss.Enter}>Enter your Email</Text>
      <TextInput
        style={EmailCss.inpNumber}
        placeholder="example@email.com"
        onChangeText={(txt) => {
          setVal(txt);
        }}
      />

      <Text style={EmailCss.errorMsg}>
        {showError.length > 0 ? showError : ""}
      </Text>

      <LinearGradient
        start={{ x: 0, y: 0.75 }}
        end={{ x: 1, y: 0.25 }}
        colors={["#BB14E2", "#161FE4"]}
        style={EmailCss.button}
      >
        <TouchableOpacity onPress={handleButtonPress}>
          <Text style={EmailCss.SendOTP}>
            {load ? <ActivityIndicator size={"large"} /> : "Next"}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default Email;
