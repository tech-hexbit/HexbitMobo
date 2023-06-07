import { View, Text } from "react-native";
import React from "react";

// Components
import Header from "./../Components/Profile/Header";
import Bio from "./../Components/Profile/Bio";

const Profile = () => {
  return (
    <View>
      <Header />
      <Bio />
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
