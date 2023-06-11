import { View, Text, Image } from "react-native";
import React from "react";

import ADCss from "./Css/AddProductCss";

const AddProduct = () => {
  return (
    <View>
      <View>
        <Text style={ADCss.AddProductText}>Add Product</Text>
      </View>
    </View>
  );
};

export default AddProduct;
