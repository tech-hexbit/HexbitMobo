import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { useNavigation, validatePathConfig } from "@react-navigation/native";

import * as ImagePicker from "expo-image-picker";

// style
import ADCss from "./Css/AddProductCss";

// img
import img from "./../../../assets/Cart/plus-circle.png";

// state
import AuthContext from "./../../../store/auth-context";

// axios
import axios from "axios";

const AddProduct = (props) => {
  const { AddStore, WhatsAppNumber, userInfo } = useContext(AuthContext);

  const [showError, setError] = useState("");
  const [name, setName] = useState("");
  const [Price, setPrice] = useState("");
  const [Stock, setStock] = useState("");
  const [Type, setType] = useState("");
  const [Des, setDes] = useState("");
  const [Img, setImg] = useState("");

  const [image, setImage] = useState(null);

  const navigation = useNavigation();

  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission denied!");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

      if (!result.cancelled) {
        console.log(result.uri);

        setSelectedImage(result.uri);
      }
    } catch (error) {
      console.log("Error picking image:", error);
    }
  };

  const handleButtonPress = async () => {
    if (
      name !== "" &&
      Price !== "" &&
      Stock !== "" &&
      Type !== "" &&
      Des !== ""
    ) {
      setError("");

      let data = {
        StoreID: AddStore,
        name: name,
        price: Price,
        stock: Stock,
        type: Type,
        Img: "img",
        des: Des,
        wa: userInfo._id,
      };

      try {
        const res = await axios.post(
          `http://192.168.43.29:8000/api/User/AddItem`,
          data
        );

        if (res.data.status === true) {
          setError("");
          console.log("res.data");
          console.log(res.data);

          // setWhatsAppNumber(data.WhatsAppNumber);

          navigation.navigate("Store");
        } else {
          setError("Error");
        }
      } catch (error) {
        console.log(error);
        setError("Error: An ");
      }
    } else {
      // console.log();
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

        <TouchableOpacity onPress={pickImage}>
          <View style={ADCss.AddImgView}>
            <View style={ADCss.AddImgBorder}>
              {selectedImage ? (
                <Image
                  style={ADCss.previewImg}
                  source={{ uri: selectedImage }}
                />
              ) : (
                <View style={ADCss.AddImgGrey}>
                  <Image source={img} style={ADCss.plusCircle}></Image>
                  <Text style={ADCss.AddpodText}>Add Product Image</Text>
                </View>
              )}
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
