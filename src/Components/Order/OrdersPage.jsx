import { View, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";

// axios
import axios from "axios";

// img
import Img from "./../../../assets/Cart/pod.png";

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
    <>
      {show.length ? (
        <>
          {show.map((val, key) => {
            return (
              <View key={key}>
                <View>
                  <View>
                    <Text>Order No.</Text>
                    <Text>{val._id}</Text>
                  </View>
                  <View>
                    <Text>Order Date</Text>
                    <Text>{val.Date}</Text>
                  </View>
                  <View>
                    <Text>Status</Text>
                    <Text>{val.Status}</Text>
                  </View>
                </View>

                <View>
                  <Text>Customer Name</Text>
                  <Text>{val.CustormerID}</Text>
                </View>

                <View>
                  <View>
                    <Text>Payment</Text>
                    <Text>{val.method}</Text>
                  </View>
                  <View>
                    <Text>Amount</Text>
                    <Text>{val.amount}</Text>
                  </View>
                </View>

                <View>
                  <Text>Shipping Address</Text>
                  <Text>{val.ShippingAddress}</Text>
                </View>

                <Text>Ordered Items</Text>

                <View>
                  <View>
                    <Image source={Img} />
                  </View>
                  <View>
                    <Text>{val.Items[0].ItemID.name}</Text>
                    <Text>{val.Items[0].ItemID.des}</Text>

                    <View>
                      <Text>Price: Rs {val.Items[0].ItemID.price}</Text>
                      <Text>Quantity: {val.Items[0].quantity}</Text>
                    </View>
                  </View>
                </View>

                <Text>OrdersPage</Text>
              </View>
            );
          })}
        </>
      ) : (
        <Text>No Data</Text>
      )}
    </>
  );
};

export default OrdersPage;
