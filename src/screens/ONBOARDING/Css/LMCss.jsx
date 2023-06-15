import { StyleSheet } from "react-native";

import { COLORS } from "../../../constants/theme";

const LMCss = StyleSheet.create({
  mDIv: {
    flexGrow: 1,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  MDiv: {
    marginTop: 20,
    width: "80%",
  },
  LoginText: {
    color: "#fff",
    fontWeight: 600,
    fontSize: 18,
  },
  LoginText1: {
    borderWidth: 2,
    marginBottom: 15,
    width: "100%",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderColor: "#fff",
    color: "#fff",
  },
  LoginText2: {
    borderWidth: 2,
    marginBottom: 15,
    width: "100%",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderColor: "#fff",
    color: "#fff",
  },
  GetStarted: {
    marginTop: 60,
    backgroundColor: "#fff",
    color: COLORS.primary,
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 70,
    borderRadius: 10,
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 30,
  },
  Already: {
    marginTop: 20,
    color: "#fff",
    fontWeight: 600,
    fontSize: 18,
  },

  //   LoginText1::place
  //   LoginText2::place
});

export default LMCss;
