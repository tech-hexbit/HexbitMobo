import { StyleSheet } from "react-native";

// theme
import { COLORS } from "../../../constants/theme";

const BioCss = StyleSheet.create({
  mDiv: { paddingHorizontal: 20 },
  SwitchStoreView: {
    width: 110,
    height: 35,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#350B5E",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  SwitchStore: {
    textAlign: "center",
    color: "#350B5E",
    fontSize: 15,
    fontWeight: 600,
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
});

export default BioCss;
