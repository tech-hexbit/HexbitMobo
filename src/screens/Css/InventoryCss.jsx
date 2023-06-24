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
    flexDirection: "column",
    alignItems: "flex-end",
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
  list: {
    marginBottom: 15,
    flexDirection: "column",
    gap: 10,
    opacity: 0,
  },
  listshow: {
    marginBottom: 15,
    flexDirection: "column",
    gap: 10,
    opacity: 1,
  },
  opions: {
    elevation: 4,
    backgroundColor: "#622ac3",
    color: "#fff",
    textAlign: "center",
    paddingVertical: 11,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: 600,
  },
  NoItems: {
    textAlign: "center",
    fontWeight: 600,
    fontSize: 18,
    marginVertical: 20,
  },
});

export default InvCss;
