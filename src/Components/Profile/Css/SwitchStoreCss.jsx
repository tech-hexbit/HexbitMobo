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
    marginLeft: 20,
  },
  StoreName: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 600,
  },
  StoreType: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 600,
  },
  img: {
    width: 45,
    height: 45,
  },
});

export default SSCss;
