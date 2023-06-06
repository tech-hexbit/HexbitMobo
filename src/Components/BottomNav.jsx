import React from "react";
import { View, Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import Home from "./../screens/Home";
import Inventory from "./../screens/Inventory";
import Cart from "./../screens/Cart";
import Profile from "./../screens/Profile";
import Discount from "./../screens/Discount";
import CartNav from "../../navigation/CartNav";
// img
import img1 from "./../../assets/Vector-3.png";
import img2 from "./../../assets/Vector-1.png";
import img3 from "./../../assets/Vector-2.png";
import img4 from "./../../assets/Vector-4.png";
import img5 from "./../../assets/Vector.png";

const BottomNav = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Inventory"
      screenOptions={{
        headerShown: false,
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
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartNav}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ focused }) => (
            <Image
              source={img3}
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
        name="Discount"
        component={Discount}
        options={{
          tabBarLabel: "Discount",
          tabBarIcon: ({ focused }) => (
            <Image
              source={img4}
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
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => (
            <Image
              source={img5}
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
