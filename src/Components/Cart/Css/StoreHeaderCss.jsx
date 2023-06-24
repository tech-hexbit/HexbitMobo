import { StyleSheet } from "react-native";

// theme
import { COLORS } from "../../../constants/theme";

const StoreHeaderCss = StyleSheet.create({
  mDiv: {
    width: "100%",
    padding: 20,
    backgroundColor: "#ccceff",
  },
  Welcome: {
    color: COLORS.primary,
    fontSize: 20,
    fontWeight: 900,
  },
  Hexbit: {
    color: COLORS.primary,
    fontSize: 33,
    fontWeight: 900,
  },
  inpView: {
    paddingLeft: 15,
    marginTop: 20,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  inp: {
    marginVertical: 10,
    marginLeft: 24,
    width: "100%",
    fontSize: 20,
  },
  Tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  Add: {
    textAlign: "center",
    backgroundColor: "#350B5E",
    color: "#fff",
    paddingVertical: 5,
    borderRadius: 10,
    fontWeight: 400,
    paddingHorizontal: 10,
  },
  View: {
    textAlign: "center",
    backgroundColor: "#350B5E",
    color: "#fff",
    paddingVertical: 5,
    borderRadius: 10,
    fontWeight: 400,
    paddingHorizontal: 10,
  },
});

export default StoreHeaderCss;
