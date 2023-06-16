import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";

// state
import AuthContext from "./../../../store/auth-context";

// style
import BioCss from "./Css/BioCss";

const Bio = () => {
  const { logout, userInfo } = useContext(AuthContext);

  console.log(userInfo);
  return (
    <View style={BioCss.mDiv}>
      <View style={BioCss.RowDiv}>
        <View>
          <Text style={BioCss.title}>Store Name</Text>
          <Text style={BioCss.data}>Store ABC</Text>
        </View>
        <View style={BioCss.SwitchStoreView}>
          <Text style={BioCss.SwitchStore}>Edit Profile</Text>
        </View>
      </View>

      <View style={BioCss.RowDiv}>
        <View style={BioCss.dataView}>
          <Text style={BioCss.title}>Name</Text>
          <Text style={BioCss.data}>{userInfo.name}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            logout();
          }}
        >
          <View style={BioCss.SwitchStoreView}>
            <Text style={BioCss.SwitchStore}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={BioCss.dataView}>
        <Text style={BioCss.title}>Email</Text>
        <Text style={BioCss.data}>{userInfo.email}</Text>
      </View>

      <View style={BioCss.dataView}>
        <Text style={BioCss.title}>Nature of the company</Text>
        <Text style={BioCss.data}>{userInfo.CompanyNature}</Text>
      </View>
    </View>
  );
};

export default Bio;
