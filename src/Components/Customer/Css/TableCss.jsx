import { StyleSheet } from "react-native";

// theme
import { COLORS } from "../../../constants/theme";

const TableCss = StyleSheet.create({
  mView: {
    width: "90%",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingVertical: 10,
    gap: 14,
  },
  headerCell: {
    fontWeight: "bold",
    flex: 1,
  },
  tableCell: {
    flex: 1,
    textTransform: "capitalize",
  },
});

export default TableCss;
