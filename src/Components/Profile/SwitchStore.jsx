import React from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

// style
import SSCss from "./Css/SwitchStoreCss";

// img
import img from "./../../../assets/Profile/shop.png";
import plus from "./../../../assets/Profile/plus.png";

const SwitchStore = () => {
  const navigation = useNavigation();
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

      <View style={SSCss.storeBlock}>
        <Image source={img} style={SSCss.img} />
        <View style={SSCss.rightView}>
          <Text style={SSCss.StoreName}>Store Name</Text>
          <Text style={SSCss.StoreType}>Store Type</Text>
        </View>
      </View>

      <View style={SSCss.createView}>
        <Image source={plus} style={SSCss.plus} />
        <Text
          style={SSCss.CreateStore}
          onPress={() => {
            navigation.navigate("CartMain");
          }}
        >
          Create Store
        </Text>
      </View>
    </View>
  );
};

export default SwitchStore;
