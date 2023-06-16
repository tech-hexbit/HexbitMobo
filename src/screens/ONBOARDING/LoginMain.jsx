import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";

// style
import LMCss from "./Css/LMCss";

// img
import img1 from "./../../../assets/Login/logo.png";

// axios
import axios from "axios";

// state
import AuthContext from "./../../../store/auth-context";

const LoginMain = () => {
  const [showNum, setNum] = useState("");
  const [showEmail, setEmail] = useState("");
  const [showError, setError] = useState("");

  const navigation = useNavigation();

  const { login } = useContext(AuthContext);

  const handleButtonPress = async () => {
    if (showNum.length == 10 && showEmail !== "") {
      setError("");
      console.log(showNum);
      console.log(showEmail);

      let data = {
        WhatsAppNumber: showNum,
        email: showEmail,
      };

      try {
        const res = await axios.post(
          `http://192.168.1.40:8000/api/App/onborading/Login`,
          data
        );

        if (res.data.status === true) {
          console.log("res.data");
          console.log(res.data);

          login(res.data.token, res.data.userInfo);

          navigation.navigate("Home");
        } else {
          setError("Invalid Credentials");
          Alert.alert("Invalid Credentials");
        }
      } catch (error) {
        console.log(error);
        setError("Error: An Unexpected Error Happened");
      }
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
          keyboardType="numeric"
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
