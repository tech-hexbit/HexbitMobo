import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";

const OrdersPage = (props) => {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    console.log("first");
  };

  console.log(props.route.params._id);
  return (
    <View>
      <View>
        <View>
          <Text>Order No.</Text>
          <Text>{props.route.params._id}</Text>
        </View>
        <View>
          <Text></Text>
          <Text></Text>
        </View>
        <View>
          <Text></Text>
          <Text></Text>
        </View>
      </View>
      <Text>OrdersPage</Text>
    </View>
  );
};

export default OrdersPage;
