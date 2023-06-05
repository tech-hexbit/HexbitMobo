import React from "react";
import { View, Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import Home from "./../screens/Home";
import Inventory from "./../screens/Inventory";

// img
import img1 from "./../../assets/Vector-3.png";
import img2 from "./../../assets/Vector-1.png";

const BottomNav = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <Image
              source={img1}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? "#bf9fff" : "#717171",
              }}
              onPress={() => {
                console.log("Home ++");
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Inventory"
        component={Inventory}
        options={{
          tabBarLabel: "Inventory",
          tabBarIcon: ({ focused }) => (
            <Image
              source={img2}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? "#bf9fff" : "#717171",
              }}
              onPress={() => {
                console.log("Inventory --");
              }}
            />
          ),
          //   tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
