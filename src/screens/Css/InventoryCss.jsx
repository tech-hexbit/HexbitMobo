import { StyleSheet } from "react-native";

const InvCss = StyleSheet.create({
  ProductsGrid: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginVertical: 15,
  },
  posrel: {
    position: "relative",
  },
  posAbs: {
    paddingVertical: 5,
    paddingHorizontal: 40,
    backgroundColor: "red",
    color: "#fff",
    position: "absolute",
    right: 0,
    bottom: 0,
  },
});

export default InvCss;
