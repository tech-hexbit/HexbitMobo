import { StyleSheet } from "react-native";

import { COLORS } from "../../../constants/theme";

const LoginCss = StyleSheet.create({
  mDIv: {
    flexGrow: 1,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  img2: {
    marginTop: 30,
    marginBottom: 10,
  },
  Sell: {
    fontWeight: 700,
    fontSize: 30,
    color: "#fff",
    textAlign: "left",
  },
  GetStarted: {
    marginTop: 60,
    backgroundColor: "#fff",
    color: COLORS.primary,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 67,
    paddingRight: 60,
    borderRadius: 10,
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 30,
  },
});

export default LoginCss;
