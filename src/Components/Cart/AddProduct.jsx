import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

// style
import ADCss from "./Css/AddProductCss";

// img
import img from "./../../../assets/Cart/plus-circle.png";

const AddProduct = () => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
            <Text style={ADCss.label}>Product Price</Text>
            <TextInput style={ADCss.TextInputTag} placeholder="₹ 100" />
          </View>
          <View style={ADCss.w45Div}>
            <Text style={ADCss.label}>Qty In Stock</Text>
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
          <Text style={ADCss.label}>Product Description</Text>
          <TextInput
            style={ADCss.TextInputTag}
            multiline={true}
            numberOfLines={4}
            placeholder="ABC Store Description ...."
          />
        </View>

        <View style={ADCss.btnView}>
          <TouchableOpacity
            style={ADCss.btnNext}
            onPress={() => {
              navigation.navigate("Store");
            }}
          >
            <Text style={ADCss.Next}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddProduct;
