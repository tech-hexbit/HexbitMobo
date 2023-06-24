import React from "react";
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
          // onChangeText={(txt) => {
          //   setVal(txt);
          // }}
        />
      </View>

      <View style={EditProfileCss.ViewInp}>
        <Text style={EditProfileCss.SNText}>Name</Text>
        <TextInput
          style={EditProfileCss.inpNumber}
          placeholder="Name"
          // onChangeText={(txt) => {
          //   setVal(txt);
          // }}
        />
      </View>

      <View style={EditProfileCss.ViewInp}>
        <Text style={EditProfileCss.SNText}>Email</Text>
        <TextInput
          style={EditProfileCss.inpNumber}
          placeholder="example@email.com"
          // onChangeText={(txt) => {
          //   setVal(txt);
          // }}
        />
      </View>

      <View style={EditProfileCss.ViewInp}>
        <Text style={EditProfileCss.SNText}>Nature of the company</Text>
        <TextInput
          style={EditProfileCss.inpNumber}
          placeholder="Retailer"
          // onChangeText={(txt) => {
          //   setVal(txt);
          // }}
        />
      </View>

      <View style={EditProfileCss.mDIV}>
        <TouchableOpacity>
          <View>
            <Text>Save</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EditProfile;
