import React from "react";
import { View, Text, StyleSheet } from "react-native";

// theme
import { COLORS, SIZES } from "../../constants/theme";

const Activity = (props) => {
  return (
    <View style={ActivityCss.ActivityBlock}>
      <Text style={ActivityCss.amtText}>{props.amt}</Text>
      <Text style={ActivityCss.statusText}>{props.status}</Text>
    </View>
  );
};

const ActivityCss = StyleSheet.create({
  ActivityBlock: {
    backgroundColor: COLORS.ActivityBlock,
    borderRadius: 10,
  },
  amtText: {
    color: "white",
    fontWeight: 500,
    fontSize: 30,
  },
  statusText: {
    color: "white",
    fontWeight: 500,
    fontSize: 20,
  },
});

export default Activity;
