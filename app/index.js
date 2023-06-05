import { View, Text, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

// components
import Header from "../components/Header";
import Sales from "../components/Order/Sales";
import Inventory from "../components/Order/Inventory";

// theme
import { COLORS, SIZES } from "../constants/theme";

export default function Home() {
  return (
    <View style={sty.mDiv}>
      {/* Use the `Screen` component to configure the layout. */}
      <Stack.Screen options={{ title: "Home" }} />
      {/* Use the `Link` component to enable optimized client-side routing. */}
      <Header pageName="Orders" />
      <Sales />
      <Inventory />

      <Text>Hello World</Text>
    </View>
  );
}

const sty = StyleSheet.create({
  mDiv: {
    margin: 20,
    backgroundColor: COLORS.bgScreen,
  },
});
