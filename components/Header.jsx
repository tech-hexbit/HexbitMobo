import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { COLORS, SIZES } from "../constants/theme";

const Header = (props) => {
  return (
    <View style={styles.mDiv}>
      <Text style={styles.HeaderMDIv}>Hexbit.io</Text>
      <Text style={styles.pageName}>{props.pageName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mDiv: {
    margin: 20,
  },
  HeaderMDIv: {
    color: COLORS.primary,
    fontWeight: 900,
    fontSize: 25,
  },
  pageName: {
    color: COLORS.primary,
    fontWeight: 900,
    fontSize: 45,
  },
});

export default Header;
