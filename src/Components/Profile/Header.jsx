import { View, Text } from "react-native";
import React from "react";

import HCss from "./Css/HeaderCss";

const Header = () => {
  return (
    <View style={HCss.mDiv}>
      <Text style={HCss.Title}>Profile</Text>
      <Text style={HCss.SwitchStore}>Switch Store</Text>
    </View>
  );
};

export default Header;
