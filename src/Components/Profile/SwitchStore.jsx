import { View, Text, Image } from "react-native";
import React from "react";

// style
import SSCss from "./Css/SwitchStoreCss";

// img
import img from "./../../../assets/Profile/shop.png";

const SwitchStore = () => {
  return (
    <View style={SSCss.mDIv}>
      <Text style={SSCss.Selectastore}>Select a store</Text>

      <View style={SSCss.storeBlock}>
        <Image source={img} style={SSCss.img} />
        <View style={SSCss.rightView}>
          <Text style={SSCss.StoreName}>Store Name</Text>
          <Text style={SSCss.StoreType}>Store Type</Text>
        </View>
      </View>
    </View>
  );
};

export default SwitchStore;
