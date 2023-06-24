import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

// axios
import axios from "axios";

// style
import PPCss from "../Inventory/Css/ProductPageCss";

// img
import img from "./../../../assets/Cart/pod.png";

const ProductPage = (props) => {
  const navigation = useNavigation();

  const [showError, setError] = useState("");
  const [showData, setData] = useState([]);

  useEffect(() => {
    dataInfo();
  }, []);

  const dataInfo = async () => {
    try {
      let data = {
        ItemID: props.route.params.id,
      };
      const res = await axios.post(
        `http://192.168.43.29:8000/api/App/cart/getItemInfo`,
        data
      );

      if (res.data.status === true) {
        setError("");
        console.log("res.data");
        console.log(res.data.Item);

        setData(res.data.Item);
      } else {
        setError("Error");
      }
    } catch (error) {
      console.log(error);
      setError("Error: An Unexpected Error Happened");
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={PPCss.headerDiv}>
        <Text style={PPCss.headerText}>Product Details</Text>
      </View>
      {showData.length > 0 ? (
        <>
          {showData.map((val, key) => {
            return (
              <View key={key}>
                <View style={PPCss.AddImgView}>
                  <Image source={{ uri: val.Img }} style={PPCss.pimg}></Image>
                </View>

                <View style={PPCss.RowView}>
                  <View style={PPCss.RowViewChild}>
                    <View>
                      <Text style={PPCss.val1}>Product No.</Text>
                      <Text style={[PPCss.val2, PPCss.idText]}>{val._id}</Text>
                    </View>
                    <View>
                      <Text style={PPCss.val1}>Product Name</Text>
                      <Text style={[PPCss.val2, PPCss.nameText]}>
                        {val.name}
                      </Text>
                    </View>
                  </View>
                  <View style={PPCss.RowViewChild}>
                    <View>
                      <Text style={PPCss.val1}>Price</Text>
                      <Text style={PPCss.val2}>₹ {val.price}</Text>
                    </View>
                    <View>
                      <Text style={PPCss.val1}>Product Type</Text>
                      <Text style={PPCss.val2}>{val.type}</Text>
                    </View>
                  </View>

                  <View style={PPCss.desView}>
                    <Text style={PPCss.val1}>Product Description</Text>
                    <Text style={PPCss.val2des}>{val.des}</Text>
                  </View>

                  <View style={PPCss.RowViewChild}>
                    <View>
                      <Text style={PPCss.val1}>Shipping Period</Text>
                      <Text style={PPCss.val2}>7 Days</Text>
                    </View>
                    <View>
                      <Text style={PPCss.val1}>Cancellable</Text>
                      <Text style={PPCss.val2}>Yes</Text>
                    </View>
                  </View>

                  <View style={PPCss.RowViewChild}>
                    <View>
                      <Text style={PPCss.val1}>Return Period</Text>
                      <Text style={PPCss.val2}>7 Days</Text>
                    </View>
                    <View>
                      <Text style={PPCss.val1}>Returnable</Text>
                      <Text style={PPCss.val2}>Yes</Text>
                    </View>
                  </View>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Edit", {
                      _id: props.route.params.id,
                    });
                  }}
                >
                  <View style={PPCss.EditVIew}>
                    <Text style={PPCss.Edit}>Edit</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </>
      ) : (
        ""
      )}
    </ScrollView>
  );
};

export default ProductPage;
