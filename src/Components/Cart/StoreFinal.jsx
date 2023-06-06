import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// img
import img from "./../../../assets/Cart/StoreFinal.png";

const StoreFinal = () => {
  return (
    <View style={SFCss.mDiv}>
      <Image source={img} style={SFCss.img} />
      <Text style={SFCss.Congrats}>
        Congrats!! Your Store has been successfully created
      </Text>
      <Text style={SFCss.NowGo}>
        Now, Go to your store and start adding products to your catalogue.
      </Text>

      <LinearGradient
        start={{ x: 0, y: 0.75 }}
        end={{ x: 1, y: 0.25 }}
        colors={["#BB14E2", "#161FE4"]}
        style={SFCss.button}
      >
        <Text
          style={SFCss.SendOTP}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          Go To Store
        </Text>
      </LinearGradient>
    </View>
  );
};

const SFCss = StyleSheet.create({
  mDiv: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CCCEFF",
  },
  img: {
    width: 350,
    height: 300,
  },
  Congrats: {
    width: "90%",
    textAlign: "center",
    color: "#350b5e",
    fontSize: 20,
    fontWeight: 900,
    marginTop: 22,
    marginBottom: 12,
  },
  NowGo: {
    width: "90%",
    textAlign: "center",
    color: "#714d9f",
    fontSize: 15,
    fontWeight: 500,
  },
  button: {
    marginTop: 40,
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
});

export default StoreFinal;
