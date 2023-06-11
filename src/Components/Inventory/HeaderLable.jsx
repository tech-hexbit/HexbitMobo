import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";

// style
import HLCss from "./Css/HeaderLableCss";

const HeaderLable = () => {
  const [showVal, set] = useState("Running Low");

  useEffect(() => {
    console.log(showVal);
  }, [showVal]);
  return (
    <View style={HLCss.mDIv}>
      <TouchableOpacity
        // style={HLCss.btnNext}
        onPress={() => {
          set("All Products");
        }}
      >
        <View
          style={
            showVal === "All Products"
              ? HLCss.rowEleViewActive
              : HLCss.rowEleView
          }
        >
          <Text style={HLCss.labText}>All Products</Text>
          <Text style={HLCss.labVal}>101</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        // style={ADCss.btnNext}
        onPress={() => {
          set("Running Low");
        }}
      >
        <View
          style={
            showVal === "Running Low"
              ? HLCss.rowEleViewActive
              : HLCss.rowEleView
          }
          //   style={HLCss.rowEleView}
        >
          <Text style={HLCss.labText}>Running Low</Text>
          <Text style={HLCss.labVal}>101</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        // style={ADCss.btnNext}
        onPress={() => {
          set("Out of Stock");
        }}
      >
        <View
          style={
            showVal === "Out of Stock"
              ? HLCss.rowEleViewActive
              : HLCss.rowEleView
          }
        >
          <Text style={HLCss.labText}>Out of Stock</Text>
          <Text style={HLCss.labVal}>101</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderLable;
