import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

// theme
import { COLORS } from "../../constants/theme";

const InpOne = () => {
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
        <TouchableOpacity style={InpOneCss.btnNext}>
          <Text style={InpOneCss.Next}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const InpOneCss = StyleSheet.create({
  imp1View: {
    marginTop: 20,
    width: "80%",
    marginBottom: 20,
  },
  StoreName: {
    color: "#626262",
    fontWeight: 600,
    fontSize: 20,
    marginBottom: 10,
  },
  inpNumber: {
    borderWidth: 1,
    borderColor: COLORS.ActivityBlock,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  btnView: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  btnNext: {
    paddingVertical: 11,
    backgroundColor: "#622AC3",
    width: 100,
    borderRadius: 10,
  },
  Next: {
    color: "#fff",
    fontWeight: 800,
    fontSize: 18,
    textAlign: "center",
  },
});

export default InpOne;
