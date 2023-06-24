import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

// img
import edit from "./../../../assets/Cart/edit.png";

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

const ProductCartCss = StyleSheet.create({
  insDiv: {
    width: "90%",
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    // flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
    borderWidth: 1,
    borderColor: "#d3d3d3",
  },
  leftDiv: {
    width: "32%",
  },
  rightDiv: {
    width: "60%",
  },
  dec: {
    color: "#626262",
    textAlign: "justify",
    fontWeight: 400,
    fontSize: 14,
    marginBottom: 5,
  },
  price: {
    color: "#626262",
    textAlign: "justify",
    fontWeight: 700,
    fontSize: 14,
    marginBottom: 5,
  },
  name: {
    color: "#350b5e",
    fontWeight: 600,
    fontSize: 18,
    marginBottom: 5,
  },
  statsDiv: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Order: {
    fontWeight: 600,
    fontSize: 14,
    color: "#07B141",
  },
  InStore: {
    fontWeight: 600,
    fontSize: 14,
    color: "#FF1A2E",
  },
  edit: {
    height: "100%",
    width: 30,
    backgroundColor: "red",
  },
  ImgRender: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

export default ProductCart;
