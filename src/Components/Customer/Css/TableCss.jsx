import { StyleSheet } from "react-native";

// theme
import { COLORS } from "../../../constants/theme";

const TableCss = StyleSheet.create({
  mView: {
    width: "90%",
    marginTop: 10,
    borderColor: "rgba(0, 0, 0, 0.10)",
    borderWidth: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    // borderBottomWidth: 1,
    // borderBottomColor: "gray",
    paddingVertical: 10,
    // paddingHorizontal: 8,
    gap: 14,
  },
  headerCell: {
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  tableCell: {
    flex: 1,
    textTransform: "capitalize",
    textAlign: "center",
  },
});

export default TableCss;
