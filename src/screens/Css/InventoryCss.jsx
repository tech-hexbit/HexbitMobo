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

  posAbsMain: {
    position: "absolute",
    right: 15,
    bottom: 15,
  },
  posAbs: {
    backgroundColor: "#622ac3",
    color: "#fff",

    padding: 26,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    height: 74,
    width: 74,
    borderRadius: 37,
    elevation: 4,
  },
  plus: {
    width: 21,
    height: 21,
  },
});

export default InvCss;
