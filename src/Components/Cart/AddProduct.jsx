import { View, Text, Image, TextInput } from "react-native";
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

      <View style={ADCss.paddView}>
        <Text style={ADCss.label}>Product Name</Text>
        <TextInput style={ADCss.TextInputTag} placeholder="ABC Store" />
      </View>

      <View style={ADCss.rowInp}>
        <View style={ADCss.w45Div}>
          <Text style={ADCss.label}>Product Name</Text>
          <TextInput style={ADCss.TextInputTag} placeholder="Rs 100" />
        </View>
        <View style={ADCss.w45Div}>
          <Text style={ADCss.label}>Product Name</Text>
          <TextInput style={ADCss.TextInputTag} placeholder="100" />
        </View>
      </View>

      <View style={ADCss.paddView}>
        <Text style={ADCss.label}>Product Type</Text>
        <TextInput
          style={ADCss.TextInputTag}
          placeholder="Select Product type"
        />
      </View>

      <View style={ADCss.paddView}>
        <Text style={ADCss.label}>Product Name</Text>
        <TextInput style={ADCss.TextInputTag} placeholder="ABC Store" />
      </View>
    </View>
  );
};

export default AddProduct;
