import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import Header from "./Header";

// img
import img from "./../../../assets/Cart/cartGroceries.png";

// state
import AuthContext from "./../../../store/auth-context";

// axios
import axios from "axios";

// env
import { REACT_NATIVE_BASE_URL } from "@env";

const InpTwo = (props) => {
  const [showError, setError] = useState("");
  const [shoeDes, setDes] = useState("");

  const navigation = useNavigation();

  const { WhatsAppNumber } = useContext(AuthContext);

  // useEffect(() => {
  //   console.log(props.route.params);
  // }, []);

  const handleButtonPress = async () => {
    if (shoeDes.length > 0) {
      setError("");

      let data = {
        WhatsAppNumber: WhatsAppNumber,
        StoreName: props.route.params.StoreName,
        StoreType: props.route.params.StoreType,
        PinCode: props.route.params.PinCode,
        Add: props.route.params.Add,
        Locality: props.route.params.Locality,
        City: props.route.params.City,
        State: props.route.params.State,
        Country: props.route.params.Country,
        Website: props.route.params.Website,
        StoreDescription: shoeDes,
      };

      console.log(WhatsAppNumber, "= WhatsAppNumber");

      try {
        const res = await axios.post(
          `${REACT_NATIVE_BASE_URL}/api/App/cart/AddStore`,
          data
        );

        if (res.data.status === true) {
          setError("");
          console.log("res.data");
          console.log(res.data);

          navigation.navigate("StoreFinal");

          // setWhatsAppNumber(data.WhatsAppNumber);

          // navigate.navigate("Home", {
          //   WhatsAppNumber: `${data.WhatsAppNumber}`,
          // });
        } else {
          console.log(res);
          setError("Error");
        }
      } catch (error) {
        console.log(error);
        setError("Error: An ");
      }
    } else {
      console.log("fill");
      setError("Please Enter A Valid Number");
    }
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={InpTwoCss.mDiv}>
        <Header Header="SETUP YOUR STORE" img={img} />

        <Text style={InpTwoCss.t1}>Tell us more about your store</Text>
        <Text style={InpTwoCss.t2}>
          Add a short description about your store
        </Text>

        <Text style={InpTwoCss.StoreName}>Store Description</Text>

        <TextInput
          placeholder="Write a breif description  of your store"
          multiline={true}
          numberOfLines={20}
          style={InpTwoCss.des}
          onChangeText={(txt) => {
            setDes(txt);
          }}
          // style={{ height: 200, textAlignVertical: "top" }}
        />

        <Text style={InpTwoCss.errorMsg}>
          {showError.length > 0 ? showError : ""}
        </Text>

        <View style={InpTwoCss.btnView}>
          <TouchableOpacity
            style={InpTwoCss.btnNext}
            onPress={
              handleButtonPress
              // navigation.navigate("StoreFinal");
            }
          >
            <Text style={InpTwoCss.Next}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const InpTwoCss = StyleSheet.create({
  mDiv: {
    flexGrow: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  t1: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 900,
    color: "#350B5E",
  },
  t2: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 16,
    fontWeight: 500,
    color: "#7b579f",
  },
  StoreName: {
    width: "80%",
    color: "#626262",
    fontWeight: 600,
    fontSize: 20,
    marginBottom: 10,
  },
  des: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#7d629b",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  btnView: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
    marginBottom: 20,
  },
  btnNext: {
    paddingVertical: 11,
    backgroundColor: "#622AC3",
    width: 100,
    borderRadius: 10,
  },
  Next: {
    color: "#fff",
    fontWeight: 800,
    fontSize: 18,
    textAlign: "center",
  },
  errorMsg: {
    color: "#800000",
    marginVertical: 15,
  },
});

export default InpTwo;
