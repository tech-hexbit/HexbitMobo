import { View, Text } from "react-native";
import React from "react";

// style
import DisCss from "./Css/DiscountCss";

// components
import StoreHeader from "./../Components/Cart/StoreHeader";
import Table from "./../Components/Customer/Table";

const Discount = () => {
  return (
    <>
      <StoreHeader true={true} title="Customer" DisTabs={true} />

      <View>
        <>
          <Table />
        </>
        <>
          <View style={DisCss.NoDiv}>
            <Text>No Customer</Text>
          </View>
        </>
      </View>
    </>
  );
};

export default Discount;
