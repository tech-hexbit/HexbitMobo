import { View, Text, Image, TextInput } from "react-native";
import React from "react";

// style
import FilterCss from "../Components/Order/Css/FilterCss";

// img
import img from "./../../assets/Cart/search.png";

const Filter = () => {
  return (
    <View>
      <View style={FilterCss.inpView}>
        <Image source={img} />
        <TextInput style={FilterCss.inp} placeholder="Search Order"></TextInput>
      </View>

      <Text>Filter</Text>
    </View>
  );
};

export default Filter;
