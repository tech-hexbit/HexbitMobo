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
        <Text>Discount</Text>
      </View>
    </>
  );
};

export default Discount;
