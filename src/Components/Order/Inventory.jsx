import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

// axios
import axios from "axios";

// env
import { REACT_NATIVE_BASE_URL } from "@env";

// style
import InventoryCss from "./Css/InventoryCss";

const Inventory = () => {
  const [tableData, setTableData] = useState();
  const [show, set] = useState("All");

  const navigate = useNavigation();

  useEffect(() => {
    dataSet();
  }, []);

  const dataSet = async () => {
    try {
      let data = {
        StoreID: "64893a6b749921c486f47f7d",
      };

      const res = await axios.post(
        `http://192.168.43.29:8000/api/App/Order/GetStoreOrder`,
        data
      );

      console.log(res.data.Order);
      setTableData(res.data.Order);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Text style={InventoryCss.StatusText}>Inventory Status</Text>
      <View style={InventoryCss.tabView}>
        <View style={InventoryCss.ViewRow}>
          <Text style={InventoryCss.txt1}>QUANTITY IN HAND</Text>
          <Text style={InventoryCss.txt2}>5768</Text>
        </View>
        <View style={InventoryCss.ViewRow}>
          <Text style={InventoryCss.txt3}>QUANTITY TO BE RECEIVED</Text>
          <Text style={InventoryCss.txt4}>674</Text>
        </View>
      </View>

      <TouchableOpacity onPress={dataSet}>
        <View>
          <Text>Refresh</Text>
        </View>
      </TouchableOpacity>

      <View style={InventoryCss.toggleBtn}>
        <Text
          style={show === "All" ? InventoryCss.selected : InventoryCss.All}
          onPress={() => {
            set("All");
          }}
        >
          All
        </Text>
        <Text
          style={
            show === "Shipped" ? InventoryCss.selected : InventoryCss.Shipped
          }
          onPress={() => {
            set("Shipped");
          }}
        >
          Shipped
        </Text>
        <Text
          style={
            show === "Cancelled"
              ? InventoryCss.selected
              : InventoryCss.Cancelled
          }
          onPress={() => {
            set("Cancelled");
          }}
        >
          Cancelled
        </Text>
        <Text
          style={show === "On Hold" ? InventoryCss.selected : InventoryCss.On}
          onPress={() => {
            set("On Hold");
          }}
        >
          On Hold
        </Text>
      </View>

      {tableData?.length > 0 ? (
        <View>
          <View style={InventoryCss.tableRow}>
            <Text style={InventoryCss.headerCell}>Date</Text>
            <Text style={InventoryCss.headerCell}>Order No.</Text>
            <Text style={InventoryCss.headerCell}>Status</Text>
            <Text style={InventoryCss.headerCell}>Amount</Text>
          </View>

          {tableData.map((row, index) => {
            console.log("row------------");
            console.log(row.Date);
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigate.navigate("OrdersPage", {
                    _id: `${row._id}`,
                  });
                  console.log(row._id);
                }}
              >
                <View style={InventoryCss.tableRow}>
                  <Text style={InventoryCss.tableCell}>{row.Date}</Text>
                  <Text style={InventoryCss.tableCell}>{row._id}</Text>
                  <Text style={InventoryCss.tableCell}>{row.Status}</Text>
                  <Text style={InventoryCss.tableCell}>{row.amount}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      ) : (
        <Text>No Orders</Text>
      )}
    </View>
  );
};

export default Inventory;
