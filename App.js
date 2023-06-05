import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// screens
import Home from "./src/screens/Home";
import Inventory from "./src/screens/Inventory";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <Inventory />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
