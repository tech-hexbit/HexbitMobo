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
    paddingVertical: 20,
  },
  Selectastore: {
    color: "#350B5E",
    fontSize: 26,
    fontWeight: 700,
    marginBottom: 20,
    textAlign: "center",
  },
  storeBlock: {
    backgroundColor: "#7a23cf",
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 15,
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
  createView: {
    marginTop: 20,
    borderColor: "#7A23CF",
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  plus: {
    width: 35,
    height: 35,
    marginRight: 15,
  },
  CreateStore: {
    fontSize: 18,
    fontWeight: 600,
    color: "#7A23CF",
  },
  centerCreateStore: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "red",
  },
});

export default SSCss;
