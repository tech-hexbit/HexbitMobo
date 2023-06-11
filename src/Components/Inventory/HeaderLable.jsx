import { View, Text } from "react-native";
import React from "react";

// style
import HLCss from "./Css/HeaderLableCss";

const HeaderLable = () => {
  return (
    <View style={HLCss.mDIv}>
      <View style={HLCss.rowEleView}>
        <Text style={HLCss.labText}>All Products</Text>
        <Text>101</Text>
      </View>
      <View style={HLCss.rowEleView}>
        <Text style={HLCss.labText}>Running Low</Text>
        <Text>101</Text>
      </View>
      <View style={HLCss.rowEleView}>
        <Text style={HLCss.labText}>Out of Stock</Text>
        <Text>101</Text>
      </View>
    </View>
  );
};

export default HeaderLable;
