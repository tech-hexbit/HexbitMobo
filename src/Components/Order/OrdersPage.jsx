import { View, Text, Image, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";

// axios
import axios from "axios";

// img
import Img from "./../../../assets/Cart/pod.png";

// style
import OPCss from "./Css/OrderPage";

const OrdersPage = (props) => {
  const [show, set] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let data = {
      id: props.route.params._id,
    };

    const res = await axios.post(
      `http://192.168.1.40:8000/api/App/Order/orderDetails`,
      data
    );

    console.log("--------res.data.data---------");
    console.log(res.data.data[0].Items);
    set(res.data.data);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <>
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

                    <View style={OPCss.ItemDiv}>
                      <View>
                        <Image source={Img} />
                      </View>
                      <View>
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

                    <View style={OPCss.UpdateStatusView}>
                      <View style={OPCss.UpdateStatusViewChild}>
                        <Text style={OPCss.UpdateStatus}>Update Status</Text>
                      </View>
                    </View>
                  </View>
                </View>
              );
            })}
          </>
        ) : (
          <Text>No Data</Text>
        )}
      </>
    </ScrollView>
  );
};

export default OrdersPage;
