import React from "react";
import { View, Text, StyleSheet } from "react-native";

// style
import ActivityCss from "./Css/ActivityCss";

const Activity = (props) => {
  return (
    <View style={ActivityCss.ActivityBlock}>
      <Text style={ActivityCss.amtText}>{props.amt}</Text>
      <Text style={ActivityCss.statusText}>{props.status}</Text>
    </View>
  );
};

export default Activity;
