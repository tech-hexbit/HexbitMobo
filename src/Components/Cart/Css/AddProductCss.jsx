import { StyleSheet } from "react-native";

// theme
import { COLORS } from "../../../constants/theme";

const ADCss = StyleSheet.create({
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
    marginBottom: 30,
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
    marginBottom: 14,
  },
  AddpodText: {
    color: "#3E3E3E",
    fontSize: 16,
    fontWeight: 600,
  },
  paddView: {
    paddingHorizontal: 30,
  },
  label: {
    color: "#454444",
    fontSize: 16,
    fontWeight: 600,
  },
});

export default ADCss;
