import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect, useCallback, useMemo } from "react";

const AuthContext = React.createContext();

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
    AsyncStorage.setItem("userInfo", userInfo);
    AsyncStorage.setItem("token", token);
    setLoading(false);
  };

  const logout = () => {
    setLoading(true);
    setuserToken(null);
    AsyncStorage.removeItem("token");
    setLoading(false);
  };

  const isLoadingFun = async () => {
    try {
      setLoading(true);
      let userToken = await AsyncStorage.getItem("token");
      setuserToken(userToken);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    isLoadingFun();
  }, []);
  //   const contextValue = useMemo(() => ({}), []);

  return (
    <AuthContext.Provider
      value={{
        WhatsAppNumber,
        setWhatsAppNumber,
        login,
        logout,
        isLoading,
        userToken,
        storeID,
        setstoreID,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
