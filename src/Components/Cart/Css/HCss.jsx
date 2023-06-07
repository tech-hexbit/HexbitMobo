import { StyleSheet } from "react-native";

// theme
import { COLORS } from "../../../constants/theme";

const HCss = StyleSheet.create({
  HeaderText: {
    fontSize: 20,
    fontWeight: 900,
    textAlign: "center",
    marginTop: 20,
    color: COLORS.primary,
  },
  img: {
    width: 200,
    height: 200,
  },
});

export default HCss;
