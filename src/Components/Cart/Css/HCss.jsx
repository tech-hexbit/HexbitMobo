import { StyleSheet } from "react-native";

const HCss = StyleSheet.create({
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
});

export default HCss;
