import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// components
import StoreHeader from "./StoreHeader";
import ProductCart from "./ProductCart";

// style
import StoreCss from "./Css/StoreCss";

// state
import AuthContext from "./../../../store/auth-context";

// axios
import axios from "axios";

const Store = (props) => {
  const { WhatsAppNumber, setstoreID } = useContext(AuthContext);
  const [showError, setError] = useState("");

  useEffect(() => {
    getData;
  }, []);

  const getData = async () => {
    try {
      console.log("first-->");

      let data = {
        StoreID: setstoreID,
      };
      const res = await axios.post(
        `http://192.168.1.40:8000/api/App/cart/getStoreItems`,
        data
      );
      if (res.data.status === true) {
        setError("");
        console.log("res.data");
        console.log(res.data);
      } else {
        console.log(res);
        setError("Error");
      }
    } catch (error) {
      console.log(error);
      setError("Error: An Unexpected Error Happened");
    }
  };

  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={getData}>
        <View>
          <Text>hello</Text>
        </View>
      </TouchableOpacity>
      <View>
        <StoreHeader true={true} title="MyStore" />
        <Text style={StoreCss.Products}>Products</Text>
        <View style={StoreCss.ProductsGrid}>
          <ProductCart
            name="Product Name"
            dec="Filler text is text that shares some characteristics of a real written
          text, but is random."
            price={500}
            Order={200}
            InStore={326}
          />
          <ProductCart
            name="Product Name"
            dec="Filler text is text that shares some characteristics of a real written
          text, but is random."
            price={500}
            Order={200}
            InStore={326}
          />
          <ProductCart
            name="Product Name"
            dec="Filler text is text that shares some characteristics of a real written
        text, but is random."
            price={500}
            Order={200}
            InStore={326}
          />
          <ProductCart
            name="Product Name"
            dec="Filler text is text that shares some characteristics of a real written
        text, but is random."
            price={500}
            Order={200}
            InStore={326}
          />
        </View>
        <View style={StoreCss.Addpod}>
          <Text
            style={StoreCss.AddProduct}
            onPress={() => {
              // console.log(props.route.params);
              navigation.navigate("AddProduct");
            }}
          >
            Add Product
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Store;
