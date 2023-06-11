import { StyleSheet } from "react-native";

// theme
import { COLORS } from "../../../constants/theme";

const ADCss = StyleSheet.create({
  mDiv: {
    flexGrow: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  AddProductText: {
    marginVertical: 20,
    color: "#350B5E",
    textAlign: "center",
    fontSize: 24,
    fontWeight: 900,
  },
  AddImgView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  AddImgBorder: {
    borderRadius: 18,
    borderStyle: "dotted",
    borderWidth: 1.23,
    padding: 10,
  },
});

export default ADCss;
