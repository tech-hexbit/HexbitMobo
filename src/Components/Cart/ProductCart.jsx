import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

// img
import img from "./../../../assets/Cart/pod.png";
import edit from "./../../../assets/Cart/edit.png";

const ProductCart = (props) => {
  const navigation = useNavigation();
  return (
    <View style={ProductCartCss.insDiv}>
      <View style={ProductCartCss.leftDiv}>
        <Image source={img} />
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
              navigation.navigate("Edit");
            }}
          >
            <Image source={edit} />
          </TouchableOpacity>
        </View>
        <Text style={ProductCartCss.dec}>{props.dec}</Text>
        <Text style={ProductCartCss.price}>PRICE: ₹ {props.price}</Text>
        <View style={ProductCartCss.statsDiv}>
          <Text style={ProductCartCss.Order}>Order placed: {props.Order}</Text>
          <Text style={ProductCartCss.InStore}>In Store : {props.InStore}</Text>
        </View>
      </View>
    </View>
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
    width: "66%",
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
});

export default ProductCart;
