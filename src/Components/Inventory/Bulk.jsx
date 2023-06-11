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
        <View style={BulkCss.imgVIew}>
          <Image source={img} style={BulkCss.img}></Image>
        </View>
        <Text style={BulkCss.UploadFile}>Upload Your File</Text>
        <Text style={BulkCss.FileDesText}>
          Upload XL Sheet, JSON, XML files only
        </Text>

        <View style={BulkCss.btnRowDiv}>
          <Text>Browse Files</Text>
          <Text>Submit</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Bulk;
