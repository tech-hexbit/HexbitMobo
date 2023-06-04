import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { SafeAreaView, ScrollView, View, Text } from "react-native";

import Header from "../components/Header";

const Home = () => {
  const router = useRouter();

  return (
    <View>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <Stack.Screen
          options={{
            headerStyle: { backgroundColor: "#350b5e" },
            headerShadowVisible: false,
            headerTitle: "Home",
          }}
        /> */}
        <Header pageName="pageName" />
      </SafeAreaView>
    </View>
  );
};

export default Home;
