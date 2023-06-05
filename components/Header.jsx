import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { COLORS, SIZES } from "../constants/theme";

const Header = (props) => {
  return (
    <View>
      <Text style={{}}>Hexbit.io</Text>
      <Text>{props.pageName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderMDIv: {
    color: COLORS.primary,
  },
});

export default Header;
