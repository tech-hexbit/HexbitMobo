import React, { useState, useEffect, useContext } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

// style
import SSCss from "./Css/SwitchStoreCss";

// img
import img from "./../../../assets/Profile/shop.png";
import plus from "./../../../assets/Profile/plus.png";

// state
import AuthContext from "./../../../store/auth-context";

// axios
import axios from "axios";

const SwitchStore = () => {
  const navigation = useNavigation();

  const { userInfo } = useContext(AuthContext);

  const [showError, setError] = useState("");
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    StoreDataFum();
  }, []);

  useEffect(() => {
    console.log(storeData);
  }, [storeData]);

  const StoreDataFum = async () => {
    console.log("--------storeData--------");

    let data = {
      SellerID: userInfo._id,
    };

    try {
      const res = await axios.post(
        `http://192.168.1.40:8000/api/App/Profile/getStoreList`,
        data
      );

      console.log(data);

      if (res.data.status === true) {
        setError("");

        console.log("Lenght", res.data.StoresList.length);

        setStoreData(res.data.StoresList);
      } else {
        setError("Error");
      }
    } catch (error) {
      console.log(error);
      setError("Error: An Unexpected Error Happened");
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={SSCss.mDIv}>
        <Text style={SSCss.Selectastore}>Select a store</Text>

        {storeData.length > 0 ? (
          <>
            {storeData.map((val, key) => {
              return (
                <View style={SSCss.storeBlock} key={key}>
                  <Image source={img} style={SSCss.img} />
                  <View style={SSCss.rightView}>
                    <Text style={SSCss.StoreName}>Store Name</Text>
                    <Text style={SSCss.StoreType}>Store Type</Text>
                  </View>
                </View>
              );
            })}
          </>
        ) : (
          ""
        )}

        <View style={SSCss.createView}>
          <Image source={plus} style={SSCss.plus} />
          <Text
            style={SSCss.CreateStore}
            onPress={() => {
              navigation.navigate("CartMain");
            }}
          >
            Create Store
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SwitchStore;
