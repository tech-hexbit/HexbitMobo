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
        tabBarStyle: {
          backgroundColor: "#350b5e",
        },
        tabBarLabelStyle: { display: "none" },
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
                tintColor: focused ? "#fff" : "#bf9fff",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ focused }) => (
            <Image
              source={img2}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? "#fff" : "#bf9fff",
              }}
            />
          ),
          tabBarBadge: 3,
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
                tintColor: focused ? "#fff" : "#bf9fff",
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
