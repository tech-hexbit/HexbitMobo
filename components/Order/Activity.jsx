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
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 25,
    paddingRight: 25,
  },
  amtText: {
    color: "white",
    fontWeight: 500,
    fontSize: 30,
    textAlign: "center",
  },
  statusText: {
    color: "white",
    fontWeight: 500,
    fontSize: 20,
    textAlign: "center",
  },
});

export default Activity;
