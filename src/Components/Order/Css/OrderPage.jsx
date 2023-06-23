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
  qtpriceDiv: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    gap: 10,
  },
  valPriceQt: {
    fontWeight: 600,
    fontSize: 14,
  },
  HeaderView: {
    backgroundColor: "#CCCEFF",
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  HeaderTextDetails: {
    color: "#350B5E",
    fontWeight: 700,
    fontSize: 30,
  },
  HeaderText_id: {
    color: "#350B5E",
    fontWeight: 700,
    fontSize: 16,
  },
  UpdateStatusView: {
    flexDirection: "column",
    alignItems: "flex-end",
    marginVertical: 20,
  },
  UpdateStatusViewChild: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: "#622AC3",
    borderWidth: 1,
    borderRadius: 10,
  },
  UpdateStatus: {
    fontWeight: 600,
    fontSize: 14,
    color: "#622AC3",
    textAlign: "center",
  },
  itemdataView: {
    width: "50%",
  },
  DataNoView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  NoData: {
    fontSize: 20,
    fontWeight: 600,
    marginVertical: 30,
  },
});

export default OPCss;
