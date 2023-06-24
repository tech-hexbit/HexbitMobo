import { View, Text, ScrollView } from "react-native";
import React from "react";

// style
import EditProfileCss from "./Css/EditProfileCss";

const EditProfile = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={EditProfileCss.EPHeaderView}>
        <Text style={EditProfileCss.EditProfile}>Edit Profile</Text>
      </View>

      <View style={EditProfileCss.mDIV}>
        <Text>EditProfile</Text>
      </View>
    </ScrollView>
  );
};

export default EditProfile;
