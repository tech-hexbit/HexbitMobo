import { View, Text } from "react-native";
import React from "react";

// style
import BioCss from "./Css/BioCss";

const Bio = () => {
  return (
    <View style={BioCss.mDiv}>
      <View style={BioCss.RowDiv}>
        <View style={BioCss.dataView}>
          <Text style={BioCss.title}>Store Name</Text>
          <Text style={BioCss.data}>Store ABC</Text>
        </View>
        <View style={BioCss.SwitchStoreView}>
          <Text style={BioCss.SwitchStore}>Edit Profile</Text>
        </View>
      </View>

      <View>
        <Text>Name</Text>
        <Text>Raghav Anand</Text>
      </View>

      <View>
        <Text>Email</Text>
        <Text>raghavanand@gmail.com</Text>
      </View>

      <View>
        <Text>Nature of the company</Text>
        <Text>Retail</Text>
      </View>
    </View>
  );
};

export default Bio;
