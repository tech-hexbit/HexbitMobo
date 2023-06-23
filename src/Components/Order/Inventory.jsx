import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

// axios
import axios from "axios";

// env
import { REACT_NATIVE_BASE_URL } from "@env";

// style
import InventoryCss from "./Css/InventoryCss";

// store
import AuthContext from "./../../../store/auth-context";

// img
import refresh from "./../../../assets/refresh.png";

const Inventory = () => {
  const [tableData, setTableData] = useState([]);
  const [show, set] = useState("All");

  const { AddStore } = useContext(AuthContext);

  const navigate = useNavigation();

  useEffect(() => {
    dataSet();
  }, []);

  const dataSet = async () => {
    try {
      let data = {
        StoreID: AddStore,
      };

      const res = await axios.post(
        `http://192.168.43.29:8000/api/App/Order/GetStoreOrder`,
        data
      );

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

      <TouchableOpacity onPress={dataSet} style={InventoryCss.refreshDiv}>
        <Image source={refresh} style={InventoryCss.refresh} />
      </TouchableOpacity>

      {tableData?.length > 0 ? (
        <View>
          <View style={InventoryCss.tableRow}>
            <Text style={InventoryCss.headerCell}>Date</Text>
            <Text style={InventoryCss.headerCell}>Order No.</Text>
            <Text style={InventoryCss.headerCell}>Status</Text>
            <Text style={InventoryCss.headerCell}>Method</Text>
            <Text style={InventoryCss.headerCell}>Amount</Text>
          </View>

          {tableData
            .filter((val) => {
              if (show === "All") {
                return val;
              } else if (val.Status.includes(show)) {
                return val;
              }
            })
            .map((row, index) => {
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
                    <Text style={[InventoryCss.tableCell, InventoryCss.Date]}>
                      {row.Date}
                    </Text>
                    <Text style={[InventoryCss.tableCell, InventoryCss.idText]}>
                      {row._id}
                    </Text>
                    <Text
                      style={[
                        InventoryCss.tableCell,
                        row.Status === "Cancelled"
                          ? InventoryCss.cancelledTableText
                          : "",
                        row.Status === "Shipped"
                          ? InventoryCss.ShippedTableText
                          : "",
                        row.Status === "Delivered"
                          ? InventoryCss.DeliveredTableText
                          : "",
                      ]}
                    >
                      {row.Status}
                    </Text>
                    <Text style={[InventoryCss.tableCell, InventoryCss.method]}>
                      {row.method}
                    </Text>
                    <Text style={[InventoryCss.tableCell, InventoryCss.amount]}>
                      {row.amount}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
        </View>
      ) : (
        <Text style={InventoryCss.NoOrders}>No Orders</Text>
      )}
    </View>
  );
};

export default Inventory;
