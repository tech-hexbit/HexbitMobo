import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect, useCallback, useMemo } from "react";

const AuthContext = React.createContext();

// axios
import axios from "axios";

export const AuthContextProvider = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [userToken, setuserToken] = useState(null);
  const [WhatsAppNumber, setWhatsAppNumber] = useState(0);
  const [storeID, setstoreID] = useState("");
  const [userInfo, setuserInfo] = useState(null);
  const [AddStore, setAddStore] = useState(null);

  const login = (token, userInfo) => {
    console.log("+----------------------+");
    console.log(token);

    console.log("userInfo Store");
    console.log(userInfo);

    setLoading(true);
    setuserToken(token);
    setuserInfo(userInfo);

    AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
    AsyncStorage.setItem("token", token);
    setLoading(false);

    updateData(userInfo.Store[0]._id);
  };

  const logout = () => {
    setLoading(true);
    setuserToken(null);
    AsyncStorage.removeItem("token");
    AsyncStorage.removeItem("userInfo");
    setLoading(false);
  };

  const isLoadingFun = async () => {
    try {
      setLoading(true);

      let userToken = await AsyncStorage.getItem("token");
      let userInfo = await AsyncStorage.getItem("userInfo");

      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setuserToken(userToken);
        setuserInfo(userInfo);
      }

      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  const isLoadingStoreFun = async () => {
    try {
      let StoreID = await AsyncStorage.getItem("StoreID");

      if (StoreID) {
        console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<,StoreID");
        console.log(StoreID);

        setAddStore(StoreID);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const updateData = async (id) => {
    console.log("================================");
    console.log("Update Data");
    try {
      setAddStore(id);

      AsyncStorage.setItem("StoreID", id);

      console.log("id = " + id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isLoadingFun();
    isLoadingStoreFun();
  }, []);

  useEffect(() => {
    console.log("AddStore =================================" + AddStore);
  }, [AddStore]);

  return (
    <AuthContext.Provider
      value={{
        setWhatsAppNumber,
        login,
        logout,
        setstoreID,
        updateData,
        WhatsAppNumber,
        isLoading,
        userToken,
        storeID,
        userInfo,
        AddStore,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
