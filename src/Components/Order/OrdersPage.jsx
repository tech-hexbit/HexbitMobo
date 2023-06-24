import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  // Picker,
} from "react-native";

import DropDownPicker from "react-native-dropdown-picker";

// axios
import axios from "axios";

// img
import Img from "./../../../assets/Cart/pod.png";
import close from "./../../../assets/Profile/close.png";

// style
import OPCss from "./Css/OrderPage";

const OrdersPage = (props) => {
  const [show, set] = useState([]);
  const [showError, setError] = useState("");
  const [updateView, setUpdateView] = useState(false);
  const [orderUP, setorderUP] = useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Shipped", value: "Shipped" },
    { label: "Cancelled", value: "Cancelled" },
    { label: "Delivered", value: "Delivered" },
  ]);

  useEffect(() => {
    console.log(value);
  }, [value]);

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

    set(res.data.data);
  };

  const handle = async () => {
    if (value !== null) {
      let data = {
        id: show[0]._id,
        val: value,
      };

      try {
        const res = await axios.post(
          `http://192.168.43.29:8000/api/App/Order/UpdateStatus`,
          data
        );

        if (res.data.status === true) {
          setError("");
          getData();
          setUpdateView(false);
        } else {
          setError("Error: An Unexpected Error Happened");
        }
      } catch (error) {
        console.log(error);
        setError("Error: An Unexpected Error Happened");
      }
    } else {
      console.log("first");
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

                        <DropDownPicker
                          style={OPCss.inpNumber}
                          open={open}
                          value={value}
                          items={items}
                          placeholder="Select an option"
                          setOpen={setOpen}
                          setValue={setValue}
                          setItems={setItems}
                        />

                        {/* <TextInput
                          placeholder="Select Order Status"
                          onChangeText={(txt) => {
                            setorderUP(txt);
                          }}
                        /> */}

                        <View style={OPCss.saveBtnView}>
                          <TouchableOpacity
                            style={OPCss.tOSave}
                            onPress={handle}
                          >
                            <Text style={OPCss.Save}>Save</Text>
                          </TouchableOpacity>
                        </View>

                        <Text style={OPCss.errorMsg}>
                          {showError.length > 0 ? showError : ""}
                        </Text>
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
