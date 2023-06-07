import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

// style
import HCss from "./Css/HeaderCss";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={HCss.mDiv}>
      <Text style={HCss.Title}>Profile</Text>
      <View style={HCss.SwitchViewMain}>
        <View style={HCss.SwitchStoreView}>
          <Text
            style={HCss.SwitchStore}
            onPress={() => {
              navigation.navigate("SwitchStore");
            }}
          >
            Switch Store
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
