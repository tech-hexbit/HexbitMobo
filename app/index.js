import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Link, Stack } from "expo-router";

// components
import Header from "../components/Header";
import Sales from "../components/Order/Sales";
import Inventory from "../components/Order/Inventory";

// theme
import { COLORS, SIZES } from "../constants/theme";

export default function Home() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={sty.mDiv}>
        <Stack.Screen options={{ title: "Home" }} />

        <Header pageName="Orders" />

        <Sales />
        <Inventory />
      </View>
    </ScrollView>
  );
}

const sty = StyleSheet.create({
  mDiv: {
    padding: 20,
    backgroundColor: COLORS.bgScreen,
  },
});
