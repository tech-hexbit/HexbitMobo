import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

// style
import PPCss from "../Inventory/Css/ProductPageCss";

// img
import img from "./../../../assets/Cart/pod.png";

const ProductPage = (props) => {
  const navigation = useNavigation();

  useEffect(() => {
    dataInfo();
  }, []);

  const dataInfo = async () => {
    console.log(props.route.params.id);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={PPCss.headerDiv}>
        <Text style={PPCss.headerText}>Product Details</Text>
      </View>
      <View style={PPCss.AddImgView}>
        <Image source={img} style={PPCss.pimg}></Image>
      </View>

      <View style={PPCss.RowView}>
        <View style={PPCss.RowViewChild}>
          <View>
            <Text style={PPCss.val1}>Product No.</Text>
            <Text style={PPCss.val2}>#6745867</Text>
          </View>
          <View>
            <Text style={PPCss.val1}>Product Name</Text>
            <Text style={PPCss.val2}>Product Name1</Text>
          </View>
        </View>
        <View style={PPCss.RowViewChild}>
          <View>
            <Text style={PPCss.val1}>Price</Text>
            <Text style={PPCss.val2}>₹ 1000</Text>
          </View>
          <View>
            <Text style={PPCss.val1}>Product Type</Text>
            <Text style={PPCss.val2}>Product Type</Text>
          </View>
        </View>

        <View style={PPCss.desView}>
          <Text style={PPCss.val1}>Product Description</Text>
          <Text style={PPCss.val2des}>
            Filler text is text that shares some characteristics of a real
            written text, but is random.
          </Text>
        </View>

        <View style={PPCss.RowViewChild}>
          <View>
            <Text style={PPCss.val1}>Shipping Period</Text>
            <Text style={PPCss.val2}>7 Days</Text>
          </View>
          <View>
            <Text style={PPCss.val1}>Cancellable</Text>
            <Text style={PPCss.val2}>Yes</Text>
          </View>
        </View>

        <View style={PPCss.RowViewChild}>
          <View>
            <Text style={PPCss.val1}>Return Period</Text>
            <Text style={PPCss.val2}>7 Days</Text>
          </View>
          <View>
            <Text style={PPCss.val1}>Returnable</Text>
            <Text style={PPCss.val2}>Yes</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Edit");
        }}
      >
        <View style={PPCss.EditVIew}>
          <Text style={PPCss.Edit}>Edit</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProductPage;
