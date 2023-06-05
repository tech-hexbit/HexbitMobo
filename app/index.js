import { View, Text } from "react-native";
import { Link, Stack } from "expo-router";

// components
import Header from "../components/Header";
import Sales from "../components/Order/Sales";

export default function Home() {
  return (
    <View>
      {/* Use the `Screen` component to configure the layout. */}
      <Stack.Screen options={{ title: "Home" }} />
      {/* Use the `Link` component to enable optimized client-side routing. */}
      <Header pageName="Orders" />
      <Sales />
      <Text>Hello World</Text>
    </View>
  );
}
