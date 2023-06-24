import { StyleSheet } from "react-native";

// theme
import { COLORS, SIZES } from "../../../constants/theme";

const ActivityCss = StyleSheet.create({
  SalesText: {
    color: COLORS.primary,
    fontWeight: 900,
    fontSize: 20,
    marginTop: 15,
    marginBottom: 15,
  },
  ActivityRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
});

export default ActivityCss;
