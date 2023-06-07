import { StyleSheet } from "react-native";

// theme
import { COLORS } from "../../../constants/theme";

const HCss = StyleSheet.create({
  mDiv: {
    backgroundColor: "#ccceff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  Title: {
    color: "#350b5e",
    fontSize: 36,
    fontWeight: 900,
  },
  SwitchViewMain: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  SwitchStoreView: {
    height: 35,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#350B5E",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  SwitchStore: {
    color: "#350B5E",
    fontSize: 15,
    fontWeight: 600,
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
});

export default HCss;
