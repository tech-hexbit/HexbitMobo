import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

// axios
import axios from "axios";

// img
import Img from "./../../../assets/Cart/pod.png";
import close from "./../../../assets/Profile/close.png";

// style
import OPCss from "./Css/OrderPage";

const OrdersPage = (props) => {
  const [show, set] = useState([]);
  const [showError, setError] = useState("dd");
  const [updateView, setUpdateView] = useState(false);
  const [orderUP, setorderUP] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let data = {
      id: props.route.params._id,
    };

    const res = await axios.post(
      `http://192.168.43.29:8000/api/App/Order/orderDetails`,
      data
    );

    console.log("--------res.data.data---------");
    console.log(res.data.data[0].Items);
    set(res.data.data);
  };

  const handle = async () => {
    if (orderUP === "") {
      console.log(orderUP);
    } else {
      setError("Please Fill");
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {show.length ? (
        <>
          {show.map((val, key) => {
            return (
              <View key={key}>
                <View style={OPCss.HeaderView}>
                  <Text style={OPCss.HeaderTextDetails}>Order Details</Text>
                  <Text style={OPCss.HeaderText_id}>{val._id}</Text>
                </View>

                <View style={OPCss.mDiv}>
                  <View style={OPCss.HMDiv}>
                    <View style={OPCss.val1}>
                      <Text style={OPCss.labelTEXT}>Order No.</Text>
                      <Text style={OPCss.valText}>{val._id}</Text>
                    </View>
                    <View>
                      <Text style={OPCss.labelTEXT}>Order Date</Text>
                      <Text style={OPCss.valText}>{val.Date}</Text>
                    </View>
                    <View>
                      <Text style={OPCss.labelTEXT}>Status</Text>
                      <Text style={OPCss.valText}>{val.Status}</Text>
                    </View>
                  </View>

                  <View style={OPCss.cnName}>
                    <Text style={OPCss.labelTEXT}>Customer Name</Text>
                    <Text style={OPCss.valText}>{val.CustormerID}</Text>
                  </View>

                  <View style={OPCss.cenDiv}>
                    <View>
                      <Text style={OPCss.labelTEXT}>Payment</Text>
                      <Text style={OPCss.valText}>{val.method}</Text>
                    </View>
                    <View>
                      <Text style={OPCss.labelTEXT}>Amount</Text>
                      <Text style={OPCss.valText}>₹ {val.amount}</Text>
                    </View>
                  </View>

                  <View style={OPCss.cnName}>
                    <Text style={OPCss.labelTEXT}>Shipping Address</Text>
                    <Text style={OPCss.valText}>{val.ShippingAddress}</Text>
                  </View>

                  <Text style={OPCss.OrderedItems}>Ordered Items</Text>

                  {updateView ? (
                    <>
                      <View style={OPCss.UPdataView}>
                        <Text style={OPCss.UPdataViewText}>Order Status</Text>

                        <TouchableOpacity
                          style={OPCss.close}
                          onPress={() => {
                            setUpdateView(false);
                          }}
                        >
                          <Image source={close} />
                        </TouchableOpacity>

                        <TextInput
                          style={OPCss.inpNumber}
                          placeholder="Select Order Status"
                          onChangeText={(txt) => {
                            setorderUP(txt);
                          }}
                        />

                        <Text style={OPCss.errorMsg}>
                          {showError.length > 0 ? showError : ""}
                        </Text>

                        <View style={OPCss.saveBtnView}>
                          <TouchableOpacity
                            style={OPCss.tOSave}
                            onPress={handle}
                          >
                            <Text style={OPCss.Save}>Save</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </>
                  ) : (
                    <>
                      <View style={OPCss.ItemDiv}>
                        <View>
                          <Image source={Img} />
                        </View>
                        <View style={OPCss.itemdataView}>
                          <Text style={OPCss.valName}>
                            {val.Items[0].ItemID.name}
                          </Text>
                          <Text style={OPCss.valDes}>
                            {val.Items[0].ItemID.des}
                          </Text>

                          <View style={OPCss.qtpriceDiv}>
                            <Text style={OPCss.valPriceQt}>
                              Price: Rs {val.Items[0].ItemID.price}
                            </Text>
                            <Text style={OPCss.valPriceQt}>
                              Quantity: {val.Items[0].quantity}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </>
                  )}

                  <TouchableOpacity
                    onPress={() => {
                      setUpdateView(!updateView);
                    }}
                  >
                    <View style={OPCss.UpdateStatusView}>
                      <View style={OPCss.UpdateStatusViewChild}>
                        {updateView ? (
                          <Text style={OPCss.UpdateStatus}>
                            Update Order Status
                          </Text>
                        ) : (
                          <Text style={OPCss.UpdateStatus}>Update Status</Text>
                        )}
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </>
      ) : (
        <View style={OPCss.DataNoView}>
          <Text style={OPCss.NoData}>No Data</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default OrdersPage;
