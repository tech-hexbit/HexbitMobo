import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

// img
import edit from "./../../../assets/Cart/edit.png";

// style
import ProductCartCss from "./Css/ProductCartCss";

const ProductCart = (props) => {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ProductPage");
        }}
      >
        <View style={ProductCartCss.insDiv}>
          <View style={ProductCartCss.leftDiv}>
            <Image
              source={{
                uri: props.img,
              }}
              style={ProductCartCss.ImgRender}
            />
          </View>
          <View style={ProductCartCss.rightDiv}>
            <View style={ProductCartCss.statsDiv}>
              <Text
                style={ProductCartCss.name}
                onPress={() => {
                  navigation.navigate("Edit");
                }}
              >
                {props.name}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Edit", {
                    name: `${props.name}`,
                    dec: `${props.dec}`,
                    price: `${props.price}`,
                    Order: `${props.totalSold}`,
                    InStore: `${props.stock}`,
                    _id: `${props._id}`,
                  });
                }}
              >
                <Image source={edit} />
              </TouchableOpacity>
            </View>
            <Text style={ProductCartCss.dec}>{props.dec}</Text>
            <Text style={ProductCartCss.price}>PRICE: ₹ {props.price}</Text>
            <View style={ProductCartCss.statsDiv}>
              <Text style={ProductCartCss.Order}>
                Order placed: {props.Order}
              </Text>
              <Text style={ProductCartCss.InStore}>
                In Store : {props.InStore}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ProductCart;
