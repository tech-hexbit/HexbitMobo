import { StyleSheet } from "react-native";

// theme
import { COLORS } from "../../../constants/theme";

const BioCss = StyleSheet.create({
  mDiv: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  RowDiv: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  SwitchStoreView: {
    width: 110,
    height: 35,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#350B5E",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  SwitchStore: {
    textAlign: "center",
    color: "#350B5E",
    fontSize: 15,
    fontWeight: 600,
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  dataView: {
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 600,
    color: "#626262",
  },
  data: {
    fontSize: 17,
    fontWeight: 600,
  },
});

export default BioCss;
