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
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.10)",
    paddingVertical: 10,
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
  tableCell2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  tableCellText: {
    textAlign: "center",
    textTransform: "capitalize",
  },
  awr: {
    marginLeft: 10,
  },
});

export default TableCss;
