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
});

export default FilterCss;
