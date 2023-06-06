import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React from "react";

const Path = () => {
  return (
    <View style={PathCss.mDiv}>
      <View>
        <Text>Path</Text>
      </View>
    </View>
  );
};

const PathCss = StyleSheet.create({
  mDiv: {
    marginBottom: 15,
  },
});

export default Path;
