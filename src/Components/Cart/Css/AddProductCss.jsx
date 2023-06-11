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
    borderStyle: "dotted",
    borderWidth: 1.23,
    borderRadius: 18,
    padding: 10,
  },
  AddImgGrey: {
    backgroundColor: "#c9c9c9",
    borderRadius: 7.97,
    paddingVertical: 60,
    paddingHorizontal: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  plusCircle: {
    width: 25.18,
    height: 25.18,
  },
});

export default ADCss;
