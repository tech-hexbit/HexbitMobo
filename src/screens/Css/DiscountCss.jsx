import { StyleSheet } from "react-native";

import { COLORS } from "../../../constants/theme";

const DisCss = StyleSheet.create({
  mDIv: {
    flexGrow: 1,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  errorMsg: {
    color: "#800000",
    marginBottom: 15,
  },
});

export default DisCss;
