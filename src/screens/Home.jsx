import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

// components
import StoreHeader from "../Components/Cart/StoreHeader";
import HeaderLable from "../Components/Inventory/HeaderLable";
import ProductCart from "./../Components/Cart/ProductCart";

// theme
import { COLORS } from "../constants/theme";

// style
import InvCss from "./Css/InventoryCss";

// img
import plus from "./../../assets/Inventory/plus.png";

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StoreHeader true={false} title="Inventory" />
      <HeaderLable />

      <View style={InvCss.ProductsGrid}>
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

      <View style={InvCss.posrel}>
        <View style={InvCss.posAbsMain}>
          <View style={InvCss.list}>
            <Text style={InvCss.opions}>Add a Product</Text>
            <Text style={InvCss.opions}>Import Bulk Products</Text>
            <Text style={InvCss.opions}>Export Products</Text>
          </View>

          <TouchableOpacity>
            <View style={InvCss.posAbs}>
              <Image source={plus} style={InvCss.plus} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
