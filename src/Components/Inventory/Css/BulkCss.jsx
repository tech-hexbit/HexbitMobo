import { StyleSheet } from "react-native";

// theme
import { COLORS } from "../../../constants/theme";

const BulkCss = StyleSheet.create({
  imgVIew: {
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 300,
    height: 300,
  },
  UploadFile: {
    textAlign: "center",
    color: "#350B5E",
    fontWeight: 700,
    fontSize: 25,
    marginBottom: 10,
  },
  FileDesText: {
    color: "rgba(90, 44, 135, 0.8)",
    textAlign: "center",
    fontWeight: 500,
  },
});

export default BulkCss;
