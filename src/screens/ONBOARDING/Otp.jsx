import React from "react";
import { View, Text } from "react-native";

// Components
import Header from "../../Components/ONBOARDING/Header";

const Otp = () => {
  return (
    <View>
      <Header true={true} msg="Enter your Details" />
      <Text>Otp</Text>
    </View>
  );
};

export default Otp;
