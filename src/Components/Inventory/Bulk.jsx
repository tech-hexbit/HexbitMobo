import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

// style
import BulkCss from "../Inventory/Css/BulkCss";

// img
import img from "./../../../assets/Inventory/bulk.png";

const Bulk = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Image source={img} style={BulkCss.img}></Image>
        <Text>Bulk s</Text>
      </View>
    </ScrollView>
  );
};

export default Bulk;
