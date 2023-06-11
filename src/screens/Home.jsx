import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

// components
import StoreHeader from "../Components/Cart/StoreHeader";
import HeaderLable from "../Components/Inventory/HeaderLable";
import ProductCart from "./../Components/Cart/ProductCart";

// theme
import { COLORS } from "../constants/theme";

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StoreHeader true={false} title="Inventory" />
      <HeaderLable />

      <View>
        <ProductCart
          name="Product Name"
          dec="Filler text is text that shares some characteristics of a real written
          text, but is random."
          price={500}
          Order={200}
          InStore={326}
        />
        <ProductCart
          name="Product Name"
          dec="Filler text is text that shares some characteristics of a real written
        text, but is random."
          price={500}
          Order={200}
          InStore={326}
        />
        <ProductCart
          name="Product Name"
          dec="Filler text is text that shares some characteristics of a real written
      text, but is random."
          price={500}
          Order={200}
          InStore={326}
        />
        <ProductCart
          name="Product Name"
          dec="Filler text is text that shares some characteristics of a real written
      text, but is random."
          price={500}
          Order={200}
          InStore={326}
        />
        <ProductCart
          name="Product Name"
          dec="Filler text is text that shares some characteristics of a real written
    text, but is random."
          price={500}
          Order={200}
          InStore={326}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
