import { StyleSheet } from "react-native";

// theme
import { COLORS, SIZES } from "../../../constants/theme";

const ActivityCss = StyleSheet.create({
  ActivityBlock: {
    backgroundColor: COLORS.ActivityBlock,
    borderRadius: 10,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 25,
    paddingRight: 25,
  },
  amtText: {
    color: "white",
    fontWeight: 500,
    fontSize: 30,
    textAlign: "center",
  },
  statusText: {
    color: "white",
    fontWeight: 500,
    fontSize: 20,
    textAlign: "center",
  },
});

export default ActivityCss;
