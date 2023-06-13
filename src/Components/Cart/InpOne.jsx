import React, { useState } from "react";
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
  const [stName, setstName] = useState("");
  const [stType, setstType] = useState("");
  const [stWebsite, setstWebsite] = useState("");
  const [showError, setError] = useState("");

  // Address
  const [stLocation, setstLocation] = useState("");

  const [stPinCode, setPinCode] = useState("");
  const [stAdd, setAdd] = useState("");
  const [stLocality, setLocality] = useState("");
  const [stCity, setCity] = useState("");
  const [stState, setState] = useState("");
  const [stCountry, setCountry] = useState("");

  const navigation = useNavigation();

  const handleButtonPress = async () => {
    if (
      stName.length > 0 &&
      stType.length > 0 &&
      stWebsite.length > 0 &&
      stPinCode.length > 0 &&
      stAdd.length > 0 &&
      stLocality.length > 0 &&
      stCity.length > 0 &&
      stState.length > 0 &&
      stCountry.length > 0
    ) {
      console.log(
        stName,
        stType,
        stPinCode,
        stAdd,
        stLocality,
        stCity,
        stState,
        stCountry,
        stWebsite
      );

      let data = {
        StoreName: stName,
        StoreType: stType,
        PinCode: stPinCode,
        Add: stAdd,
        Locality: stLocality,
        City: stCity,
        State: stState,
        Country: stCountry,
        Website: stWebsite,
      };

      console.log(data);

      navigation.navigate("InpTwo", {
        StoreName: `${stName}`,
        StoreType: `${stType}`,
        PinCode: `${stPinCode}`,
        Add: `${stAdd}`,
        Locality: `${stLocality}`,
        City: `${stCity}`,
        State: `${stState}`,
        Country: `${stCountry}`,
        Website: `${stWebsite}`,
      });
    } else {
      console.log("fill");
      setError("Please Enter A Valid Number");
    }
  };
  return (
    <View style={InpOneCss.imp1View}>
      <Text style={InpOneCss.StoreName}>Store Name</Text>
      <TextInput
        style={InpOneCss.inpNumber}
        placeholder="ABC Store"
        onChangeText={(txt) => {
          setstName(txt);
        }}
      />
      <Text style={InpOneCss.StoreName}>Store Type</Text>
      <TextInput
        style={InpOneCss.inpNumber}
        placeholder="Select Store type"
        onChangeText={(txt) => {
          setstType(txt);
        }}
      />
      <Text style={InpOneCss.StoreName}>Address</Text>
      <TextInput
        style={InpOneCss.inpNumber}
        placeholder="Pin Code*"
        onChangeText={(txt) => {
          setPinCode(txt);
        }}
      />
      <TextInput
        style={InpOneCss.inpNumber}
        placeholder="Address (House No, Building, Street, Area)*"
        onChangeText={(txt) => {
          setAdd(txt);
        }}
      />
      <TextInput
        style={InpOneCss.inpNumber}
        placeholder="Locality*"
        onChangeText={(txt) => {
          setLocality(txt);
        }}
      />
      <TextInput
        style={InpOneCss.inpNumber}
        placeholder="City*"
        onChangeText={(txt) => {
          setCity(txt);
        }}
      />
      <TextInput
        style={InpOneCss.inpNumber}
        placeholder="State*"
        onChangeText={(txt) => {
          setState(txt);
        }}
      />
      <TextInput
        style={InpOneCss.inpNumber}
        placeholder="Country*"
        onChangeText={(txt) => {
          setCountry(txt);
        }}
      />
      <Text style={InpOneCss.StoreName}>Website</Text>
      <TextInput
        style={InpOneCss.inpNumber}
        placeholder="https://www.abcstore.com"
        onChangeText={(txt) => {
          setstWebsite(txt);
        }}
      />
      <View style={InpOneCss.btnView}>
        <TouchableOpacity
          style={InpOneCss.btnNext}
          onPress={
            handleButtonPress
            // navigation.navigate("InpTwo");
          }
        >
          <Text style={InpOneCss.Next}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InpOne;
