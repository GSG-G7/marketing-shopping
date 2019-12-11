import { StyleSheet } from "react-native";

const search = StyleSheet.create({
  parent: {
    height: 40,
    position: "relative",
    marginTop: 30
  },

  field: {
    height: 40,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    paddingHorizontal: 10,
    borderRadius: 5
  },

  icon: {
    fontSize: 30,
    lineHeight: 40,

    position: "absolute",
    top: 0,
    right: 10
  }
});

export default search;
