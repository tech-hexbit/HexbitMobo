import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

// components
import StoreHeader from "../Components/Cart/StoreHeader";
import HeaderLable from "../Components/Inventory/HeaderLable";
import ProductCart from "./../Components/Cart/ProductCart";

// theme
import { COLORS } from "../constants/theme";

// style
import InvCss from "./Css/InventoryCss";

// img
import plus from "./../../assets/Inventory/plus.png";

// axios
import axios from "axios";

// env
import { REACT_NATIVE_BASE_URL } from "@env";

const Home = () => {
  const [showError, setError] = useState("");
  const [itemsData, setItemData] = useState([]);
  const [showOp, setOp] = useState(false);

  useEffect(() => {
    invData();
  }, []);

  const invData = async () => {
    try {
      const res = await axios.get(
        `${REACT_NATIVE_BASE_URL}/api/App/Inventory/InventoryGet`
      );

      if (res.data.status === true) {
        setError("");
        console.log("res.data");
        console.log(res.data.itemData);
        setItemData(res.data.itemData);
      } else {
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
      <StoreHeader true={false} title="Inventory s" />
      <HeaderLable />

      {itemsData.length === 0 ? (
        <Text>No Items To Show</Text>
      ) : (
        <View style={InvCss.ProductsGrid}>
          {itemsData.map((val, key) => {
            return (
              <ProductCart
                name={val.name}
                dec={val.des}
                price={val.price}
                Order={val.totalSold}
                InStore={val.stock}
                key={key}
              />
            );
          })}
        </View>
      )}

      <View style={InvCss.posrel}>
        <View style={InvCss.posAbsMain}>
          <View style={showOp ? InvCss.listshow : InvCss.list}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("AddProduct");
              }}
            >
              <Text style={InvCss.opions}>Add a Product</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Bulk");
              }}
            >
              <Text style={InvCss.opions}>Import Bulk Products</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={InvCss.opions}>Export Products</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {
              console.log("==================");
              setOp(!showOp);
            }}
          >
            <View style={InvCss.posAbs}>
              <Image source={plus} style={InvCss.plus} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
