import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
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

// img
import refresh from "./../../../assets/refresh.png";

const Store = (props) => {
  const { AddStore } = useContext(AuthContext);

  const [showData, setData] = useState([]);
  const [showError, setError] = useState("");

  useEffect(() => {
    getData;
  }, []);

  const getData = async () => {
    try {
      let data = {
        StoreID: AddStore,
      };

      console.log(data);

      const res = await axios.post(
        `http://192.168.43.29:8000/api/App/cart/getStoreItems`,
        data
      );
      if (res.data.status === true) {
        setError("");

        setData(res.data.Store);
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
      <View>
        <StoreHeader true={true} title="MyStore" />

        <View style={StoreCss.refreshDiv}>
          <Text style={StoreCss.Products}>Products</Text>

          <TouchableOpacity onPress={getData}>
            <Image source={refresh} style={StoreCss.refresh} />
          </TouchableOpacity>
        </View>
        <View style={StoreCss.ProductsGrid}>
          {showData.length > 0 ? (
            <>
              {showData.map((val, key) => {
                return (
                  <ProductCart
                    name={val.ItemID.name}
                    dec={val.ItemID.des}
                    price={val.ItemID.price}
                    Order={val.ItemID.totalSold}
                    InStore={val.ItemID.stock}
                    _id={val.ItemID._id}
                    key={key}
                  />
                );
              })}
            </>
          ) : (
            <View style={StoreCss.APView}>
              <Text style={StoreCss.PAPText}>Please Add Products</Text>
            </View>
          )}
        </View>
        <View style={StoreCss.Addpod}>
          <Text
            style={StoreCss.AddProduct}
            onPress={() => {
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
