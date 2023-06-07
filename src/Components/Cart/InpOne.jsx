import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

// style
import InpOneCss from "./Css/InpOneCss";

const InpOne = (props) => {
  const navigation = useNavigation();
  return (
    <View style={InpOneCss.imp1View}>
      <Text style={InpOneCss.StoreName}>Store Name</Text>
      <TextInput style={InpOneCss.inpNumber} placeholder="ABC Store" />

      <Text style={InpOneCss.StoreName}>Store Type</Text>
      <TextInput style={InpOneCss.inpNumber} placeholder="Select Store type" />

      <Text style={InpOneCss.StoreName}>Location</Text>
      <TextInput style={InpOneCss.inpNumber} placeholder="Delhi, India" />

      <Text style={InpOneCss.StoreName}>Website</Text>
      <TextInput
        style={InpOneCss.inpNumber}
        placeholder="https://www.abcstore.com"
      />

      <View style={InpOneCss.btnView}>
        <TouchableOpacity
          style={InpOneCss.btnNext}
          onPress={() => {
            navigation.navigate("InpTwo");
          }}
        >
          <Text style={InpOneCss.Next}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InpOne;
