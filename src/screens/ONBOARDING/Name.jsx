import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

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
import img from "./../../../assets/Login/name.png";

const Name = (props) => {
  const [showError, setError] = useState("");
  const [showVal, setVal] = useState("");
  const [load, setLoad] = useState(false);

  const navigate = useNavigation();

  const handleButtonPress = async () => {
    if (showVal.length > 0) {
      let data = {
        WhatsAppNumber: props.route.params.WhatsAppNumber,
        feild: "name",
        value: showVal,
      };

      try {
        const res = await axios.post(
          `http://192.168.43.29:8000/api/App/onborading/name&Email`,
          data
        );

        console.log(data);

        if (res.data.status === true) {
          setError("");
          console.log("res.data");
          console.log(res.data);

          console.log(data.WhatsAppNumber, "kkkkkkkkkkk");

          navigate.navigate("Email", {
            WhatsAppNumber: `${data.WhatsAppNumber}`,
          });
        } else {
          setError("Error");
        }
      } catch (error) {
        console.log(error);
        setError("Error: An Unexpected Error Happened");
      }
    } else {
      console.log("fill");
      setError("Please Enter A Valid Number");
    }
  };
  return (
    <View style={NameCss.mDIv}>
      <Header true={false} msg="Enter your Details" />
      <Path img={img} pos={1} />
      <Text style={NameCss.Enter}>Enter your Name</Text>
      <TextInput
        style={NameCss.inpNumber}
        placeholder="Name"
        onChangeText={(txt) => {
          setVal(txt);
        }}
      />

      <Text style={NameCss.errorMsg}>
        {showError.length > 0 ? showError : ""}
      </Text>

      <LinearGradient
        start={{ x: 0, y: 0.75 }}
        end={{ x: 1, y: 0.25 }}
        colors={["#BB14E2", "#161FE4"]}
        style={NameCss.button}
      >
        <Text
          style={NameCss.SendOTP}
          onPress={
            handleButtonPress
            // navigation.navigate("Email");
          }
        >
          Next
        </Text>
      </LinearGradient>
    </View>
  );
};

export default Name;
