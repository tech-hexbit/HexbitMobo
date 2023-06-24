import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

// style
import EditProfileCss from "./Css/EditProfileCss";

// state
import AuthContext from "./../../../store/auth-context";

// axios
import axios from "axios";

const EditProfile = () => {
  const [StoreName, setStoreName] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Nature, setNature] = useState("");
  const [showError, setError] = useState("");

  const { userInfo, AddStore } = useContext(AuthContext);

  const saveData = async () => {
    if (
      StoreName.length > 0 &&
      Name.length > 0 &&
      Email.length > 0 &&
      Nature.length > 0 &&
      AddStore.length > 0
    ) {
      setError("");

      console.log("StoreName ->", StoreName);
      console.log("Name ->", Name);
      console.log("Email ->", Email);
      console.log("Nature ->", Nature);
      console.log("StoreID ->", AddStore);
      console.log("user ID ->", userInfo._id);
    } else {
      console.log("fill");
      setError("Please Enter A Valid Number");
    }
  };
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

      <Text style={EditProfileCss.errorMsg}>
        {showError.length > 0 ? showError : ""}
      </Text>

      <View style={EditProfileCss.mDIV}>
        <TouchableOpacity onPress={saveData}>
          <Text style={EditProfileCss.mDIVSave}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EditProfile;
