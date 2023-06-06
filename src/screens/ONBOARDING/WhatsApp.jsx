import React from "react";
import { View, Text } from "react-native";

// Components
import Header from "../../Components/ONBOARDING/Header";

const WhatsApp = () => {
  return (
    <View>
      <Header true={true} msg="Enter your Details" />
      <Text>WhatsApp</Text>
    </View>
  );
};

export default WhatsApp;
