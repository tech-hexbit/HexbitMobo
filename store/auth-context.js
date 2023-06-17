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

  const login = (token, userInfo) => {
    console.log("+----------------------+");
    console.log(token);
    console.log(userInfo);

    setLoading(true);
    setuserToken(token);
    setuserInfo(userInfo);
    AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
    AsyncStorage.setItem("token", token);
    setLoading(false);
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

      console.log(userToken);
      console.log(userInfo);

      if (userInfo) {
        setuserToken(userToken);
        setuserInfo(userInfo);
      }

      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  const updateData = async (WhatsAppNumber) => {
    try {
      let data = {
        WhatsAppNumber,
      };
      const res = await axios.post(
        `http://192.168.1.40:8000/api/App/onborading/StoreData`,
        data
      );

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isLoadingFun();
  }, []);

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
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
