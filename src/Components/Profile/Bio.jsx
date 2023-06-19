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

  const { logout, userInfo } = useContext(AuthContext);

  useEffect(() => {
    StoreDataFum();
  }, []);

  const StoreDataFum = async () => {
    console.log("--------storeData--------");

    let data = {
      SellerID: userInfo._id,
    };

    try {
      const res = await axios.post(
        `http://192.168.1.40:8000/api/App/Profile/getStoreList`,
        data
      );

      console.log(data);

      if (res.data.status === true) {
        setError("");

        console.log("Lenght", res.data.StoresList.length);

        setStoreData(res.data.StoresList);
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
                      {val.StoreID.StoreName}
                    </Text>
                  );
                })}
              </>
            ) : (
              <Text style={BioCss.data}>Store ABC</Text>
            )}
          </View>
          <View style={BioCss.SwitchStoreView}>
            <Text style={BioCss.SwitchStore}>Edit Profile</Text>
          </View>
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
