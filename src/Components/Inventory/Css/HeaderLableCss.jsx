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
    paddingBottom: 4,
  },
  rowEleViewActive: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 4,
    borderBottomWidth: 3,
    borderBottomColor: "#350B5E",
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
    borderRadius: 10,
  },
});

export default HLCss;
