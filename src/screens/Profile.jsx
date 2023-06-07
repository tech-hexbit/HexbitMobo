import { View, Text, ScrollView } from "react-native";
import React from "react";

// Components
import Header from "./../Components/Profile/Header";
import Bio from "./../Components/Profile/Bio";
import Bank from "./../Components/Profile/Bank";

const Profile = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Header />
        <Bio />
        <Bank />
        <Text>Profile</Text>
      </View>
    </ScrollView>
  );
};

export default Profile;
