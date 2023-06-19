import React, { useState, useEffect, useContext } from "react";
import { View, Text, Image } from "react-native";
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

        console.log("res.data");
        console.log(res.data.StoresList);
        console.log("Lenght", res.data.StoresList.length);
        // console.log(data.WhatsAppNumber, "kkkkkkkkkkk");
        // navigate.navigate("Email", {
        //   WhatsAppNumber: `${props.route.params.WhatsAppNumber}`,
        // });
        // navigate.navigate("Email", {
        // WhatsAppNumber: `${data.WhatsAppNumber}`,
        // });
      } else {
        setError("Error");
      }
    } catch (error) {
      console.log(error);
      setError("Error: An Unexpected Error Happened");
    }
  };
  return (
    <View style={SSCss.mDIv}>
      <Text style={SSCss.Selectastore}>Select a store</Text>

      <View style={SSCss.storeBlock}>
        <Image source={img} style={SSCss.img} />
        <View style={SSCss.rightView}>
          <Text style={SSCss.StoreName}>Store Name</Text>
          <Text style={SSCss.StoreType}>Store Type</Text>
        </View>
      </View>

      <View style={SSCss.storeBlock}>
        <Image source={img} style={SSCss.img} />
        <View style={SSCss.rightView}>
          <Text style={SSCss.StoreName}>Store Name</Text>
          <Text style={SSCss.StoreType}>Store Type</Text>
        </View>
      </View>

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
  );
};

export default SwitchStore;
