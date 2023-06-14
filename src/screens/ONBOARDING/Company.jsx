import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
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
import img from "./../../../assets/Login/company.png";

const Company = (props) => {
  const [showError, setError] = useState("");
  const [showName, setName] = useState("");
  const [showNature, setNature] = useState("");
  const [showType, setType] = useState("");

  const navigate = useNavigation();

  const handleButtonPress = async () => {
    if (showName.length > 0 && showNature.length > 0 && showType.length > 0) {
      console.log(showName, showNature, showType);

      let data = {
        WhatsAppNumber: props.route.params.WhatsAppNumber,
        name: showName,
        type: showType,
        nature: showNature,
      };

      try {
        const res = await axios.post(
          `http://192.168.1.40:8000/api/App/onborading/Company`,
          data
        );

        console.log(data);

        if (res.data.status === true) {
          setError("");
          console.log("res.data");
          console.log(res.data);

          console.log(data.WhatsAppNumber, "kkkkkkkkkkk");
          navigate.navigate("License", {
            WhatsAppNumber: `${data.WhatsAppNumber}`,
          });
        } else {
          setError("Error");
        }
      } catch (error) {
        console.log(error);
        setError("Error: An ");
      }
    } else {
      console.log("fill");
      setError("Please Enter A Valid Number");
    }
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={CompanyCss.mDIv}>
        <Header true={false} msg="Enter your Details" />
        <Path img={img} pos={3} />

        <Text style={CompanyCss.Enter}>Name of the company</Text>
        <TextInput
          style={CompanyCss.inpNumber}
          placeholder="Name"
          onChangeText={(txt) => {
            setName(txt);
          }}
        />

        <Text style={CompanyCss.Enter}>Nature of the company</Text>
        <TextInput
          style={CompanyCss.inpNumber}
          placeholder="Select"
          onChangeText={(txt) => {
            setNature(txt);
          }}
        />

        <Text style={CompanyCss.Enter}>Type of company</Text>
        <TextInput
          style={CompanyCss.inpNumber}
          placeholder="Select"
          onChangeText={(txt) => {
            setType(txt);
          }}
        />

        <Text style={CompanyCss.errorMsg}>
          {showError.length > 0 ? showError : ""}
        </Text>

        <LinearGradient
          start={{ x: 0, y: 0.75 }}
          end={{ x: 1, y: 0.25 }}
          colors={["#BB14E2", "#161FE4"]}
          style={CompanyCss.button}
        >
          <Text
            style={CompanyCss.SendOTP}
            onPress={
              handleButtonPress
              // navigation.navigate("License");
            }
          >
            Next
          </Text>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

const CompanyCss = StyleSheet.create({
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
    marginBottom: 20,
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

export default Company;
