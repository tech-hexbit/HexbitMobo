import React, { useRef, useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

// Components
import Header from "../../Components/ONBOARDING/Header";

// theme
import { COLORS } from "../../constants/theme";

// img
import img from "./../../../assets/Login/otp.png";

const Otp = () => {
  const [seconds, setSeconds] = useState(30);
  const navigation = useNavigation();

  const l1 = useRef();
  const l2 = useRef();
  const l3 = useRef();
  const l4 = useRef();

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    if (seconds === 0) {
      clearInterval(countdownInterval);
    }

    return () => clearInterval(countdownInterval);
  }, [seconds]);

  return (
    <View style={OtpCss.mDIv}>
      <Header true={true} msg="Enter your Details" />
      <Image source={img} style={OtpCss.img} />
      <Text style={OtpCss.Enter}>Enter the OTP</Text>
      <View style={OtpCss.ViewNumber}>
        <TextInput
          style={OtpCss.inpNumber}
          ref={l1}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(txt) => {
            if (txt.length >= 1) {
              l2.current.focus();
            }
          }}
        />
        <TextInput
          style={OtpCss.inpNumber}
          ref={l2}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(txt) => {
            if (txt.length >= 1) {
              l3.current.focus();
            } else if (txt.length < 1) {
              l1.current.focus();
            }
          }}
        />
        <TextInput
          style={OtpCss.inpNumber}
          ref={l3}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(txt) => {
            if (txt.length >= 1) {
              l4.current.focus();
            } else if (txt.length < 1) {
              l2.current.focus();
            }
          }}
        />
        <TextInput
          style={OtpCss.inpNumber}
          ref={l4}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(txt) => {
            if (txt.length < 1) {
              l3.current.focus();
            }
          }}
        />
      </View>

      <LinearGradient
        start={{ x: 0, y: 0.75 }}
        end={{ x: 1, y: 0.25 }}
        colors={["#BB14E2", "#161FE4"]}
        style={OtpCss.button}
      >
        <Text
          style={OtpCss.SendOTP}
          onPress={() => {
            navigation.navigate("Name");
          }}
        >
          Send OTP
        </Text>
      </LinearGradient>
      <Text style={OtpCss.timer}>00:{seconds}</Text>
      <LinearGradient
        colors={["#BB14E2", "#161FE4"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={OtpCss.linearGradient}
      >
        <View style={OtpCss.innerContainer}>
          <Text style={OtpCss.buttonText}>Resend</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const OtpCss = StyleSheet.create({
  mDIv: {
    flexGrow: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  Enter: {
    marginBottom: 30,
    color: COLORS.primary,
    fontWeight: 700,
    fontSize: 21,
  },
  img: {
    width: "80%",
    height: "30%",
    marginBottom: 20,
  },
  ViewNumber: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  inpNumber: {
    padding: 12,
    borderColor: "#6B4EFF",
    borderWidth: 2,
    borderRadius: 10,
    width: 50,
    height: 50,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "700",
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
  timer: {
    marginTop: 25,
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 700,
  },
  linearGradient: {
    height: 50,
    width: "30%",
    borderRadius: 20, // <-- Outer Border Radius
  },
  innerContainer: {
    borderRadius: 15, // <-- Inner Border Radius
    flex: 1,
    margin: 4, // <-- Border Width
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    // fontFamily: "Gill Sans",
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    color: "#BB14E2",
    backgroundColor: "transparent",
  },
});

export default Otp;
