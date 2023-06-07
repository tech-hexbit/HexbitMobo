import { View, Text } from "react-native";
import React from "react";

// style
import BioCss from "./Css/BioCss";

const Bio = () => {
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

      <View style={BioCss.dataView}>
        <Text style={BioCss.title}>Name</Text>
        <Text style={BioCss.data}>Raghav Anand</Text>
      </View>

      <View style={BioCss.dataView}>
        <Text style={BioCss.title}>Email</Text>
        <Text style={BioCss.data}>raghavanand@gmail.com</Text>
      </View>

      <View style={BioCss.dataView}>
        <Text style={BioCss.title}>Nature of the company</Text>
        <Text style={BioCss.data}>Retail</Text>
      </View>
    </View>
  );
};

export default Bio;
