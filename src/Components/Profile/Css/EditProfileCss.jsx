import { StyleSheet } from "react-native";

// theme
import { COLORS } from "../../../constants/theme";

const EditProfileCss = StyleSheet.create({
  mDIV: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
});

export default EditProfileCss;
