import { StyleSheet } from "react-native";

// theme
import { COLORS } from "../../../constants/theme";

const BankCss = StyleSheet.create({
  mDiv: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  BankDetails: {
    color: "#350b5e",
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 10,
  },
  dataView: {
    marginBottom: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: 600,
    color: "#626262",
  },
  data: {
    fontSize: 17,
    fontWeight: 600,
  },
  dataViewBlock: {
    flexDirection: "row",
    marginBottom: 7,
  },
});

export default BankCss;
