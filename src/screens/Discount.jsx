import { View, Text } from "react-native";
import React from "react";

// style
import DisCss from "./Css/DiscountCss";

// components
import StoreHeader from "./../Components/Cart/StoreHeader";

const Discount = () => {
  return (
    <>
      <StoreHeader true={true} title="Customer" DisTabs={true} />
      <View style={DisCss.mDiv}>
        <>
          <View style={DisCss.tableRow}>
            <Text style={DisCss.headerCell}>Date</Text>
            <Text style={DisCss.headerCell}>Order No.</Text>
            <Text style={DisCss.headerCell}>Status</Text>
            <Text style={DisCss.headerCell}>Method</Text>
            <Text style={DisCss.headerCell}>Amount</Text>
          </View>
        </>
        <>
          <Text>No Customer</Text>
        </>
      </View>
    </>
  );
};

export default Discount;
