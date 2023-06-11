import { View, Text, Image } from "react-native";
import React from "react";

// style
import ADCss from "./Css/AddProductCss";

// img
import img from "./../../../assets/Cart/plus-circle.png";

const AddProduct = () => {
  return (
    <View>
      <View>
        <Text style={ADCss.AddProductText}>Add Product</Text>
      </View>

      <View style={ADCss.AddImgView}>
        <View style={ADCss.AddImgBorder}>
          <View style={ADCss.AddImgGrey}>
            <Image source={img} style={ADCss.plusCircle}></Image>
            <Text style={ADCss.AddpodText}>Add Product Image</Text>
          </View>
        </View>
      </View>

      <View>
        <Text>Product Name</Text>
      </View>
    </View>
  );
};

export default AddProduct;
