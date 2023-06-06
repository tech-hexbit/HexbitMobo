import React from "react";
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

const InpTwo = () => {
  const navigation = useNavigation();
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
          // style={{ height: 200, textAlignVertical: "top" }}
        />

        <View style={InpTwoCss.btnView}>
          <TouchableOpacity
            style={InpTwoCss.btnNext}
            onPress={() => {
              navigation.navigate("InpTwo");
            }}
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
});

export default InpTwo;
