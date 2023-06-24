import { StyleSheet } from "react-native";

// theme
import { COLORS, SIZES } from "../../../constants/theme";

const FilterCss = StyleSheet.create({
  inpView: {
    paddingLeft: 15,
    marginVertical: 10,
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
  rightView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  statViewMain: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 10,
  },
  statView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  STATUSText: {
    backgroundColor: "#595959",
    color: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontWeight: 600,
  },
  ShippedText: {
    color: "#595959",
    fontWeight: 600,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  dn_arrow: {
    backgroundColor: "#fff",
    marginRight: 5,
    // paddingVertical: 5,
    // paddingHorizontal: 10,
  },
});

export default FilterCss;
