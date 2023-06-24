import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

// style
import EditProfileCss from "./Css/EditProfileCss";

const EditProfile = () => {
  const [StoreName, setStoreName] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Nature, setNature] = useState("");
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={EditProfileCss.EPHeaderView}>
        <Text style={EditProfileCss.EditProfile}>Edit Profile</Text>
      </View>

      <View style={EditProfileCss.ViewInp}>
        <Text style={EditProfileCss.SNText}>Store Name</Text>
        <TextInput
          style={EditProfileCss.inpNumber}
          placeholder="ABC Store"
          onChangeText={(txt) => {
            setStoreName(txt);
          }}
        />
      </View>

      <View style={EditProfileCss.ViewInp}>
        <Text style={EditProfileCss.SNText}>Name</Text>
        <TextInput
          style={EditProfileCss.inpNumber}
          placeholder="Name"
          onChangeText={(txt) => {
            setName(txt);
          }}
        />
      </View>

      <View style={EditProfileCss.ViewInp}>
        <Text style={EditProfileCss.SNText}>Email</Text>
        <TextInput
          style={EditProfileCss.inpNumber}
          placeholder="example@email.com"
          onChangeText={(txt) => {
            setEmail(txt);
          }}
        />
      </View>

      <View style={EditProfileCss.ViewInp}>
        <Text style={EditProfileCss.SNText}>Nature of the company</Text>
        <TextInput
          style={EditProfileCss.inpNumber}
          placeholder="Retailer"
          onChangeText={(txt) => {
            setNature(txt);
          }}
        />
      </View>

      <View style={EditProfileCss.mDIV}>
        <TouchableOpacity>
          <Text style={EditProfileCss.mDIVSave}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EditProfile;
