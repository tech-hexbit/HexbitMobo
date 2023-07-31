import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

// state
import AuthContext from "./../../../store/auth-context";

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

import LicenseCss from "./Css/LicenseCss";

const License = (props) => {
  const [showError, setError] = useState("");
  const [showLicense, setLicense] = useState("");
  const [showGSTIN, setGSTIN] = useState("");

  const { setWhatsAppNumber, login } = useContext(AuthContext);

  const navigate = useNavigation();

  const handleButtonPress = async () => {
    if (showLicense.length > 0 && showGSTIN.length > 0) {
      let data = {
        WhatsAppNumber: props.route.params.WhatsAppNumber,
        License: showLicense,
        GSTIN: showGSTIN,
      };

      try {
        const res = await axios.post(
          `http://192.168.43.29:8000/api/App/onborading/CompanyLicense`,
          data
        );

        if (res.data.status === true) {
          setError("");
          console.log("res.data");
          console.log(res.data);

          setWhatsAppNumber(data.WhatsAppNumber);

          login(res.data.token, res.data.userInfo);

          navigate.navigate("Home", {
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
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={LicenseCss.mDIv}>
        <Header true={false} msg="Enter your Details" />
        <Path img={img} pos={4} />

        <Text style={LicenseCss.Enter}>GSTIN Number</Text>
        <TextInput
          style={LicenseCss.inpNumber}
          placeholder="Number"
          onChangeText={(txt) => {
            setGSTIN(txt);
          }}
        />

        <Text style={LicenseCss.Enter}>Importer License</Text>
        <TextInput
          style={LicenseCss.inpNumber}
          placeholder="IEC Number"
          onChangeText={(txt) => {
            setLicense(txt);
          }}
        />

        <Text style={LicenseCss.errorMsg}>
          {showError.length > 0 ? showError : ""}
        </Text>

        <LinearGradient
          start={{ x: 0, y: 0.75 }}
          end={{ x: 1, y: 0.25 }}
          colors={["#BB14E2", "#161FE4"]}
          style={LicenseCss.button}
        >
          <TouchableOpacity onPress={handleButtonPress}>
            <Text style={LicenseCss.SendOTP}>Next</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default License;
