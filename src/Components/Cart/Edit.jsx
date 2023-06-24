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

// axios
import axios from "axios";

// style
import ADCss from "./Css/AddProductCss";

// img
import img from "./../../../assets/Cart/plus-circle.png";

const Edit = (props) => {
  const [state_id, setState_id] = useState(props.route.params._id);
  const [Name, setName] = useState("");
  const [dec, setdec] = useState("");
  const [Price, setprice] = useState(0);
  const [stock, setStock] = useState(0);
  const [type, setType] = useState("");
  const [showError, setError] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    dataFun();
  }, []);

  const dataFun = async () => {
    try {
      let data = {
        ItemID: state_id,
      };

      const res = await axios.post(
        `http://192.168.43.29:8000/api/App/cart/getItemInfo`,
        data
      );

      if (res.data.status === true) {
        setError("");
        console.log("res.data");
        console.log(res.data.Item[0]);

        setName(res.data.Item[0].name);
        setprice(res.data.Item[0].price);
        setdec(res.data.Item[0].des);
        setStock(res.data.Item[0].stock);
        setType(res.data.Item[0].type);
      } else {
        setError("Error");
      }
    } catch (error) {
      console.log(error);
      setError("Error: An Unexpected Error Happened");
    }
  };

  const AddData = (e) => {
    console.log(state_id);
    console.log(Name);
    console.log(Price);
    console.log(dec);
    console.log(stock);
    console.log(type);
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
              value={Price}
              onChangeText={(txt) => {
                setprice(txt);
              }}
            />
          </View>
          <View style={ADCss.w45Div}>
            <Text style={ADCss.label}>Qty In Stock</Text>
            <TextInput
              style={ADCss.TextInputTag}
              placeholder="87"
              value={stock}
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
            value={type}
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
            value={dec}
            onChangeText={(txt) => {
              setdec(txt);
            }}
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
