import { View, Text, Image } from "react-native";
import React from "react";

// style
import ACss from "./Css/AnalyticsCss";

// img
import img from "./../../../assets/Profile/Analytics.png";

const Analytics = () => {
  return (
    <View style={ACss.mDiv}>
      <Text style={ACss.Analytics}>Analytics</Text>
      <Image source={img} style={ACss.img} />
    </View>
  );
};

export default Analytics;
