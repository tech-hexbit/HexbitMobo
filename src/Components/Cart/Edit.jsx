import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// style
import ADCss from "./Css/AddProductCss";

// img
import img from "./../../../assets/Cart/plus-circle.png";

const Edit = (props) => {
  const [Name, setName] = useState(props.route.params.name);
  const [state_id, setState_id] = useState(props.route.params._id);
  const [price, setprice] = useState(props.route.params.price);
  const [dec, setdec] = useState(props.route.params.dec);

  const navigation = useNavigation();

  useEffect(() => {
    console.log("Name ->", props.route.params);
  }, []);

  const AddData = (e) => {
    console.log(Name);
    console.log(state_id);
    console.log(price);
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View>
          <Text style={ADCss.AddProductText}>Edit Product</Text>
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
          <TextInput
            style={ADCss.TextInputTag}
            placeholder="ABC Store"
            value={Name}
            onChangeText={(txt) => {
              setName(txt);
            }}
          />
        </View>

        <View style={ADCss.rowInp}>
          <View style={ADCss.w45Div}>
            <Text style={ADCss.label}>Product Price</Text>
            <TextInput
              style={ADCss.TextInputTag}
              placeholder="₹ 100"
              value={price}
              onChangeText={(T) => {
                setprice(T);
              }}
            />
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
            style={ADCss.btnDelete}
            onPress={() => {
              navigation.navigate("Store");
            }}
          >
            <Text style={ADCss.Delete}>Delete</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={ADCss.btnNext}
            onPress={
              AddData
              // () => {
              // navigation.navigate("Store");
              // }
            }
          >
            <Text style={ADCss.Next}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Edit;
