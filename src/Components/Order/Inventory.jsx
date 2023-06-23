import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

// theme
import { COLORS, SIZES } from "../../constants/theme";

// axios
import axios from "axios";

// env
import { REACT_NATIVE_BASE_URL } from "@env";

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

const InventoryCss = StyleSheet.create({
  StatusText: {
    color: COLORS.primary,
    fontWeight: 900,
    fontSize: 20,
    marginBottom: 15,
  },
  tabView: {
    backgroundColor: COLORS.ActivityBlock,
    borderRadius: 10,
    marginBottom: 15,
  },
  ViewRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
    paddingLeft: 10,
  },
  txt1: {
    color: "white",
    padding: 12,
    fontWeight: 500,
    fontSize: 16,
    width: 230,
    borderColor: "white",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    marginTop: 10,
  },
  txt2: {
    color: "white",
    padding: 12,
    fontWeight: 500,
    fontSize: 16,
    width: 120,
    borderColor: "white",
    borderBottomWidth: 1,
    marginTop: 10,
  },
  txt3: {
    color: "white",
    padding: 12,
    fontWeight: 500,
    fontSize: 16,
    width: 230,
    borderColor: "white",
    borderRightWidth: 1,
    marginBottom: 10,
  },
  txt4: {
    color: "white",
    padding: 12,
    fontWeight: 500,
    fontSize: 16,
    borderColor: "white",
    marginBottom: 10,
  },
  toggleBtn: {
    marginTop: 5,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    borderColor: COLORS.ActivityBlock,
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
  selected: {
    backgroundColor: COLORS.ActivityBlock,
    textAlign: "center",
    fontWeight: 500,
    paddingTop: 10,
    paddingBottom: 10,
    width: "25%",
    color: "white",
  },

  All: {
    color: COLORS.primary,
    textAlign: "center",
    fontWeight: 500,
    paddingTop: 10,
    paddingBottom: 10,
    width: "25%",
    borderRightWidth: 1,
    borderRightColor: COLORS.ActivityBlock,
  },
  Shipped: {
    color: "#216445",
    textAlign: "center",
    fontWeight: 500,
    paddingTop: 10,
    paddingBottom: 10,
    width: "25%",
    borderRightWidth: 1,
    borderRightColor: COLORS.ActivityBlock,
  },
  Cancelled: {
    color: "#882830",
    textAlign: "center",
    fontWeight: 500,
    paddingTop: 10,
    paddingBottom: 10,
    width: "25%",
    borderRightWidth: 1,
    borderRightColor: COLORS.ActivityBlock,
  },
  On: {
    color: "#8f9d4b",
    textAlign: "center",
    fontWeight: 500,
    paddingTop: 10,
    paddingBottom: 10,
    width: "25%",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingVertical: 10,
  },
  headerCell: {
    fontWeight: "bold",
    flex: 1,
  },
  tableCell: {
    flex: 1,
  },
});

export default Inventory;
