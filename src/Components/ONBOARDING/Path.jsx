import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Path = (props) => {
  return (
    <View style={PathCss.mDiv}>
      <View style={PathCss.pathmDiv}>
        <View style={PathCss.pathLine0}></View>
        <Text style={props.pos >= 1 ? PathCss.active : PathCss.pathmBud}>
          1
        </Text>
        <View
          style={props.pos >= 2 ? PathCss.pathAct : PathCss.pathLine}
        ></View>
        <Text style={props.pos >= 2 ? PathCss.active : PathCss.pathmBud}>
          2
        </Text>
        <View
          style={props.pos >= 3 ? PathCss.pathAct : PathCss.pathLine}
        ></View>
        <Text style={props.pos >= 3 ? PathCss.active : PathCss.pathmBud}>
          3
        </Text>
        <View
          style={props.pos >= 4 ? PathCss.pathAct : PathCss.pathLine}
        ></View>
        <Text style={props.pos >= 4 ? PathCss.active : PathCss.pathmBud}>
          4
        </Text>
        <View style={PathCss.pathLine1}></View>
      </View>
      <Image source={props.img} style={PathCss.img} />
    </View>
  );
};

const PathCss = StyleSheet.create({
  mDiv: {
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  pathmDiv: {
    flexDirection: "row",
    justifyContent: "center",
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
  active: {
    color: "#fff",
    backgroundColor: "#350b5e",
    width: 30,
    height: 30,
    borderRadius: 15,
    textAlign: "center",
    paddingTop: 4,
  },
  pathLine0: {
    width: "7%",
    height: 6,
    backgroundColor: "#350b5e",
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
  },
  pathLine1: {
    width: "7%",
    height: 6,
    backgroundColor: "#595959",
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  },
  pathLine: {
    width: "15%",
    height: 6,
    backgroundColor: "#595959",
  },
  pathAct: {
    width: "15%",
    height: 6,
    backgroundColor: "#350b5e",
  },
  img: {
    width: 300,
    height: 220,
    marginTop: 15,
    marginBottom: 15,
  },
});

export default Path;
