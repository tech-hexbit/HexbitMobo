import { StyleSheet } from "react-native";

const StoreCss = StyleSheet.create({
  Products: {
    color: "#350B5E",
    fontWeight: 700,
    fontSize: 20,
    marginVertical: 10,
    marginLeft: 20,
  },
  ProductsGrid: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
  Addpod: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  AddProduct: {
    color: "#fff",
    backgroundColor: "#622AC3",
    borderRadius: 10,
    paddingHorizontal: 22,
    paddingVertical: 12,
    marginBottom: 10,
  },
  refresh: {
    width: 20,
    height: 20,
    tintColor: "#35005d",
  },
  refreshDiv: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 30,
  },
  PAPText: {
    fontSize: 18,
    marginVertical: 20,
  },
});

export default StoreCss;
