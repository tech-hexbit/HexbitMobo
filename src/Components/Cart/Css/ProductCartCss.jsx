import { StyleSheet } from "react-native";

// theme
import { COLORS } from "../../../constants/theme";

const ProductCartCss = StyleSheet.create({
  insDiv: {
    width: "90%",
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    // flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
    borderWidth: 1,
    borderColor: "#d3d3d3",
  },
  leftDiv: {
    width: "32%",
  },
  rightDiv: {
    width: "60%",
  },
  dec: {
    color: "#626262",
    textAlign: "justify",
    fontWeight: 400,
    fontSize: 14,
    marginBottom: 5,
  },
  price: {
    color: "#626262",
    textAlign: "justify",
    fontWeight: 700,
    fontSize: 14,
    marginBottom: 5,
  },
  name: {
    color: "#350b5e",
    fontWeight: 600,
    fontSize: 18,
    marginBottom: 5,
  },
  statsDiv: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Order: {
    fontWeight: 600,
    fontSize: 14,
    color: "#07B141",
  },
  InStore: {
    fontWeight: 600,
    fontSize: 14,
    color: "#FF1A2E",
  },
  edit: {
    height: "100%",
    width: 30,
    backgroundColor: "red",
  },
  ImgRender: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

export default ProductCartCss;
