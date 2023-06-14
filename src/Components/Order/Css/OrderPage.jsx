import { StyleSheet } from "react-native";

const OPCss = StyleSheet.create({
  mDiv: {
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  HMDiv: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    gap: 10,
  },
  cnName: {
    marginVertical: 15,
  },
  labelTEXT: {
    fontSize: 16,
    fontWeight: 500,
  },
  val1: {
    width: "40%",
    // backgroundColor: "red",
  },
  valText: {
    fontSize: 16,
    fontWeight: 600,
  },
  cenDiv: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  OrderedItems: {
    fontWeight: 600,
    fontSize: 18,
    marginVertical: 15,
  },
  ItemDiv: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderWidth: 1,
    borderColor: "lightgrey",
    padding: 10,
    borderRadius: 10,
  },
  valName: {
    fontWeight: 600,
    fontSize: 17,
    marginBottom: 5,
    color: "#350B5E",
  },
  valDes: {
    fontWeight: 400,
    fontSize: 14,
    marginBottom: 5,
  },
});

export default OPCss;
