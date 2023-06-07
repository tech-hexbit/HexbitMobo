import { View, Text, ScrollView } from "react-native";
import React from "react";

// Components
import Header from "./../Components/Profile/Header";
import Bio from "./../Components/Profile/Bio";
import Bank from "./../Components/Profile/Bank";
import Analytics from "./../Components/Profile/Analytics";

const Profile = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Header />
        <Bio />
        <Bank />
        <Analytics />
      </View>
    </ScrollView>
  );
};

export default Profile;
