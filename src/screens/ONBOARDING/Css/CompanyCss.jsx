import { StyleSheet } from "react-native";

import { COLORS } from "../../../constants/theme";

const CompanyCss = StyleSheet.create({
  mDIv: {
    flexGrow: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "80%",
    height: "30%",
    marginBottom: 20,
  },
  Enter: {
    marginBottom: 30,
    color: COLORS.primary,
    fontWeight: 700,
    fontSize: 21,
  },
  inpNumber: {
    padding: 12,
    borderColor: "#6B4EFF",
    borderWidth: 2,
    borderRadius: 10,
    width: "80%",
    marginHorizontal: "10%",
    marginBottom: 20,
  },
  button: {
    borderRadius: 10,
    paddingTop: 14,
    paddingBottom: 14,
    width: "70%",
    marginBottom: 20,
  },
  SendOTP: {
    color: "#fff",
    fontWeight: 600,
    fontSize: 20,
    textAlign: "center",
  },
  errorMsg: {
    color: "#800000",
    marginBottom: 15,
  },
});

export default CompanyCss;
