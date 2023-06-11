import { View, Text } from "react-native";
import React from "react";

// style
import HLCss from "./Css/HeaderLableCss";

const HeaderLable = () => {
  return (
    <View style={HLCss.mDIv}>
      <View style={HLCss.rowEleViewActive}>
        <Text style={HLCss.labText}>All Products</Text>
        <Text style={HLCss.labVal}>101</Text>
      </View>
      <View style={HLCss.rowEleView}>
        <Text style={HLCss.labText}>Running Low</Text>
        <Text style={HLCss.labVal}>101</Text>
      </View>
      <View style={HLCss.rowEleView}>
        <Text style={HLCss.labText}>Out of Stock</Text>
        <Text style={HLCss.labVal}>101</Text>
      </View>
    </View>
  );
};

export default HeaderLable;
