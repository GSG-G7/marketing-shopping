import { StyleSheet } from "react-native";

const headerWithoutMenu = StyleSheet.create({
  parent: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#b2bec3",
    shadowRadius: 10,
    shadowOpacity: 1

    // position: "fixed",
    // width: "100%"
  },

  icon: {
    fontSize: 30
  },

  text: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    margin: "auto"
  }
});

export default headerWithoutMenu;
