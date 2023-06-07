import { View, Text, ScrollView } from "react-native";
import React from "react";

// Components
import Header from "./../Components/Profile/Header";
import Bio from "./../Components/Profile/Bio";

const Profile = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Header />
        <Bio />
        <Text>Profile</Text>
      </View>
    </ScrollView>
  );
};

export default Profile;
