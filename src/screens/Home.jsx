import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

// components
import StoreHeader from "../Components/Cart/StoreHeader";
import HeaderLable from "../Components/Inventory/HeaderLable";

// theme
import { COLORS } from "../constants/theme";

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StoreHeader true={false} title="Inventory" />
      <HeaderLable />
      <View style={sty.mDiv}>
        <Text>Home</Text>
      </View>
    </ScrollView>
  );
};

const sty = StyleSheet.create({
  mDiv: {
    padding: 20,
    backgroundColor: COLORS.bgScreen,
  },
});

export default Home;
