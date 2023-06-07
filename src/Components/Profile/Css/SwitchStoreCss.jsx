import { StyleSheet } from "react-native";

// theme
import { COLORS } from "../../../constants/theme";

const SSCss = StyleSheet.create({
  mDIv: {
    flexGrow: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccceff",
  },
  Selectastore: {
    color: "#350B5E",
    fontSize: 17,
    fontWeight: 700,
    marginBottom: 20,
  },
  storeBlock: {
    backgroundColor: "#7a23cf",
    borderRadius: 10,
    padding: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  rightView: {
    marginLeft: 10,
  },
  StoreName: {
    color: "#fff",
  },
  StoreType: {
    color: "#fff",
  },
});

export default SSCss;
