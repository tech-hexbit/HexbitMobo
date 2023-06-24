import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import React from "react";

// img
import img from "./../../../assets/Cart/search.png";

// style
import StoreHeaderCss from "./Css/StoreHeaderCss";

const StoreHeader = (props) => {
  return (
    <View style={StoreHeaderCss.mDiv}>
      {props.true === true ? (
        <Text style={StoreHeaderCss.Welcome}>Hexbit.io</Text>
      ) : (
        ""
      )}
      <Text style={StoreHeaderCss.Hexbit}>{props.title}</Text>

      <View style={StoreHeaderCss.inpView}>
        <Image source={img} />
        <TextInput style={StoreHeaderCss.inp} placeholder="Search"></TextInput>
      </View>

      {props.DisTabs ? (
        <>
          <View style={StoreHeaderCss.Tabs}>
            <Text>Add Customer</Text>
            <Text>View Group</Text>
            <View>
              <Text>SORT BY</Text>
              <Text>A-Z</Text>
            </View>
          </View>
        </>
      ) : (
        ""
      )}
    </View>
  );
};

export default StoreHeader;
