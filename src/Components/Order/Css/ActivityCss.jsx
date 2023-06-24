import { StyleSheet } from "react-native";

// theme
import { COLORS, SIZES } from "../../../constants/theme";

const ActivityCss = StyleSheet.create({
  ActivityBlock: {
    borderRadius: 10,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 25,
    paddingRight: 25,
    width: "46%",
    height: 90,
    elevation: 4,
  },
  amtText: {
    color: "#592161",
    fontWeight: 500,
    fontSize: 30,
    textAlign: "center",
  },
  statusText: {
    color: "#000",
    fontWeight: 500,
    fontSize: 15,
    textAlign: "center",
  },
  num1: {
    backgroundColor: "#fcebff",
  },
  num2: {
    backgroundColor: "#f6d5b6",
  },
  num3: {
    backgroundColor: "#e4eaff",
  },
  num4: {
    backgroundColor: "#dcfef0",
  },
});

export default ActivityCss;
