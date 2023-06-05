import { View, Text } from "react-native";
import { Link, Stack } from "expo-router";

export default function Home() {
  return (
    <View>
      {/* Use the `Screen` component to configure the layout. */}
      <Stack.Screen options={{ title: "Home" }} />
      {/* Use the `Link` component to enable optimized client-side routing. */}
      <Text>Hello World</Text>
    </View>
  );
}
