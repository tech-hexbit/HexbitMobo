import { StyleSheet } from "react-native";

// theme
import { COLORS } from "../../../constants/theme";

const EditProfileCss = StyleSheet.create({
  mDIV: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 30,
    marginTop: 20,
  },
  mDIVSave: {
    color: "#fff",
    borderRadius: 10,
    backgroundColor: "#622AC3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: 600,
  },
  EPHeaderView: {
    backgroundColor: "#CCCEFF",
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  EditProfile: {
    fontSize: 30,
    fontWeight: 900,
    color: "#350B5E",
  },
  ViewInp: {
    marginVertical: 15,
    paddingHorizontal: 20,
  },
  SNText: {
    fontSize: 18,
    fontWeight: 600,
  },
  inpNumber: {
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#7D629B",
    borderWidth: 1,
    backgroundColor: "#F9F9F9",
    paddingVertical: 7,
    paddingHorizontal: 12,
    marginTop: 10,
  },
  errorMsg: {
    textAlign: "center",
    color: "#800000",
    marginVertical: 10,
    fontSize: 16,
  },
});

export default EditProfileCss;
