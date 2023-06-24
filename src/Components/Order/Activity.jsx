import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

// style
import ActivityCss from "./Css/ActivityCss";

const Activity = (props) => {
  return (
    <TouchableOpacity
      style={[
        ActivityCss.ActivityBlock,
        props.num == 1 ? ActivityCss.num1 : "",
        props.num == 2 ? ActivityCss.num2 : "",
        props.num == 3 ? ActivityCss.num3 : "",
        props.num == 4 ? ActivityCss.num4 : "",
      ]}
    >
      <Text style={ActivityCss.amtText}>{props.amt}</Text>
      <Text style={ActivityCss.statusText}>{props.status}</Text>
    </TouchableOpacity>
  );
};

export default Activity;
