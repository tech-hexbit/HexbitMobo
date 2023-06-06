import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React from "react";

const Path = () => {
  return (
    <View style={PathCss.mDiv}>
      <View style={PathCss.pathmDiv}>
        <Text style={PathCss.pathmBud}>1</Text>
        <Text style={PathCss.pathmBud}>2</Text>
        <Text style={PathCss.pathmBud}>3</Text>
        <Text style={PathCss.pathmBud}>4</Text>
      </View>
    </View>
  );
};

const PathCss = StyleSheet.create({
  mDiv: {
    marginBottom: 15,
  },
  pathmDiv: {
    width: "100%",
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  pathmBud: {
    color: "#fff",
    backgroundColor: "#595959",
    width: 30,
    height: 30,
    borderRadius: 15,
    textAlign: "center",
    paddingTop: 4,
  },
});

export default Path;
