import { useState } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();

  return (
    <View>
      <SafeAreaView style={{ flex: 1, backgroundColor: "red" }}>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: "red" },
            headerShadowVisible: false,
            headerTitle: "Home",
          }}
        />
        {/* <ScrollView showsVerticalScrollIndicator={false}>
        <View
        style={{
            flex: 1,
            padding: 10,
        }}
        ></View>
    </ScrollView> */}
      </SafeAreaView>
    </View>
  );
};

export default Home;
