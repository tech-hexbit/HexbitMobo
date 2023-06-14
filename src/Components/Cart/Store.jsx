import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

// components
import StoreHeader from "./StoreHeader";
import ProductCart from "./ProductCart";

// style
import StoreCss from "./Css/StoreCss";

const Store = (props) => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <StoreHeader true={true} title="MyStore" />
        <Text style={StoreCss.Products}>Products</Text>
        <View style={StoreCss.ProductsGrid}>
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
        <View style={StoreCss.Addpod}>
          <Text
            style={StoreCss.AddProduct}
            onPress={() => {
              // console.log(props.route.params);
              navigation.navigate("AddProduct");
            }}
          >
            Add Product
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Store;
