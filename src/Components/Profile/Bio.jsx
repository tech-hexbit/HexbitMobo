import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useState, useEffect } from "react";

// state
import AuthContext from "./../../../store/auth-context";

// style
import BioCss from "./Css/BioCss";

// state

// axios
import axios from "axios";

const Bio = () => {
  const [showError, setError] = useState("");
  const [storeData, setStoreData] = useState([]);

  const { logout, userInfo, AddStore } = useContext(AuthContext);

  useEffect(() => {
    StoreDataFum();
  }, []);

  const StoreDataFum = async () => {
    console.log("--------storeData--------");

    console.log(AddStore);

    let data = {
      StoreID: AddStore,
    };

    try {
      const res = await axios.post(
        `http://192.168.1.40:8000/api/App/Profile/getStoreData`,
        data
      );

      if (res.data.status === true) {
        setError("");

        console.log("res.data");
        console.log(res.data);

        setStoreData(res.data.store);
      } else {
        setError("Error");
      }
    } catch (error) {
      console.log(error);
      setError("Error: An Unexpected Error Happened");
    }
  };
  return (
    <>
      <View style={BioCss.mDiv}>
        <View style={BioCss.RowDiv}>
          <View>
            <Text style={BioCss.title}>Store Name</Text>
            {storeData.length > 0 ? (
              <>
                {storeData.map((val, key) => {
                  return (
                    <Text style={BioCss.data} key={key}>
                      {val.StoreName}
                    </Text>
                  );
                })}
              </>
            ) : (
              <Text style={BioCss.data}>--</Text>
            )}
          </View>
          <TouchableOpacity>
            <View style={BioCss.SwitchStoreView}>
              <Text style={BioCss.SwitchStore}>Edit Profile</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={BioCss.RowDiv}>
          <View style={BioCss.dataView}>
            <Text style={BioCss.title}>Name</Text>
            <Text style={BioCss.data}>{userInfo.name}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              logout();
            }}
          >
            <View style={BioCss.SwitchStoreView}>
              <Text style={BioCss.SwitchStore}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={BioCss.dataView}>
          <Text style={BioCss.title}>Email</Text>
          <Text style={BioCss.data}>{userInfo.email}</Text>
        </View>

        <View style={BioCss.dataView}>
          <Text style={BioCss.title}>Nature of the company</Text>
          <Text style={BioCss.data}>{userInfo.CompanyNature}</Text>
        </View>
      </View>
    </>
  );
};

export default Bio;
