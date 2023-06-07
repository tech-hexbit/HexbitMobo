import { View, Text } from "react-native";
import React from "react";

// style
import SSCss from "./Css/SwitchStoreCss";

const SwitchStore = () => {
  return (
    <View style={SSCss.mDIv}>
      <Text style={SSCss.Selectastore}>Select a store</Text>
    </View>
  );
};

export default SwitchStore;
