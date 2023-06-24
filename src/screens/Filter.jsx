import { View, Text, Image, TextInput } from "react-native";
import React from "react";

// style
import FilterCss from "../Components/Order/Css/FilterCss";

// img
import img from "./../../assets/Cart/search.png";
import dn_arrow from "./../../assets/Customer/dn_Arrow.png";

const Filter = () => {
  return (
    <View>
      <View style={FilterCss.inpView}>
        <Image source={img} />
        <TextInput style={FilterCss.inp} placeholder="Search Order"></TextInput>
      </View>

      <View style={FilterCss.rightView}>
        <View style={FilterCss.statViewMain}>
          <Text style={FilterCss.STATUSText}>STATUS</Text>
          <View style={FilterCss.statView}>
            <Text style={FilterCss.ShippedText}>Shipped</Text>
            <Image source={dn_arrow} style={FilterCss.dn_arrow} />
          </View>
        </View>
        <View></View>
      </View>
    </View>
  );
};

export default Filter;
