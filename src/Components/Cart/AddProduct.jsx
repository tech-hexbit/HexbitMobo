import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import ImagePicker from "react-native-image-picker";

// style
import ADCss from "./Css/AddProductCss";

// img
import img from "./../../../assets/Cart/plus-circle.png";

const AddProduct = () => {
  const [showError, setError] = useState("");
  const [name, setName] = useState("");
  const [Price, setPrice] = useState("");
  const [Stock, setStock] = useState("");
  const [Type, setType] = useState("");
  const [Des, setDes] = useState("");
  const [Img, setImg] = useState("");

  const [image, setImage] = useState(null);

  const navigation = useNavigation();

  const openGallery = async () => {
    console.log("========================");

    ImagePicker.showImagePicker({
      title: "Select an Image",
      multiple: false,
    }).then((image) => {
      setImage(image);
    });

    // const result = await launchCamera(options?)
  };
  const handleButtonPress = async () => {
    if (
      name !== "" &&
      Price !== "" &&
      Stock !== "" &&
      Type !== "" &&
      Des !== ""
    ) {
      console.log("handleButtonPress");
    } else {
      console.log("fill");
      setError("Please Enter A Valid Number");
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View>
          <Text style={ADCss.AddProductText}>Add Product</Text>
        </View>

        <TouchableOpacity onPress={openGallery}>
          <View style={ADCss.AddImgView}>
            <View style={ADCss.AddImgBorder}>
              <View style={ADCss.AddImgGrey}>
                <Image source={img} style={ADCss.plusCircle}></Image>
                <Text style={ADCss.AddpodText}>Add Product Image</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <View style={ADCss.paddView}>
          <Text style={ADCss.label}>Product Name</Text>
          <TextInput
            style={ADCss.TextInputTag}
            placeholder="ABC Store"
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
              onChangeText={(txt) => {
                setPrice(txt);
              }}
            />
          </View>
          <View style={ADCss.w45Div}>
            <Text style={ADCss.label}>Qty In Stock</Text>
            <TextInput
              style={ADCss.TextInputTag}
              placeholder="100"
              onChangeText={(txt) => {
                setStock(txt);
              }}
            />
          </View>
        </View>

        <View style={ADCss.paddView}>
          <Text style={ADCss.label}>Product Type</Text>
          <TextInput
            style={ADCss.TextInputTag}
            placeholder="Select Product type"
            onChangeText={(txt) => {
              setType(txt);
            }}
          />
        </View>

        <View style={ADCss.paddView}>
          <Text style={ADCss.label}>Product Description</Text>
          <TextInput
            style={ADCss.TextInputTag}
            multiline={true}
            numberOfLines={4}
            placeholder="ABC Store Description ...."
            onChangeText={(txt) => {
              setDes(txt);
            }}
          />
        </View>

        <Text style={ADCss.errorMsg}>
          {showError.length > 0 ? showError : ""}
        </Text>

        <View style={ADCss.btnView}>
          <TouchableOpacity
            style={ADCss.btnNext}
            onPress={
              handleButtonPress
              // navigation.navigate("Store");
            }
          >
            <Text style={ADCss.Next}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddProduct;
