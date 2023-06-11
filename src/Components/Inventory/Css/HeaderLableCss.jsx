import { StyleSheet } from "react-native";

// theme
import { COLORS } from "../../../constants/theme";

const HLCss = StyleSheet.create({
  mDIv: {
    backgroundColor: "#ccceff",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  rowEleView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  labText: {
    color: "#350B5E",
    fontSize: 12,
    fontWeight: 600,
  },
  labVal: {
    backgroundColor: "#350B5E",
    color: "#fff",
    marginLeft: 5,
    paddingVertical: 3,
    paddingHorizontal: 9,
    fontWeight: 600,
    fontSize: 7.56,
  },
});

export default HLCss;
