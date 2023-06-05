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
        {/* Use the `Screen` component to configure the layout. */}
        <Stack.Screen options={{ title: "Home" }} />
        {/* Use the `Link` component to enable optimized client-side routing. */}

        <Header pageName="Orders" />

        <Sales />
        <Inventory />

        <Text>Hello World</Text>
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
