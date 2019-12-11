import { StyleSheet } from "react-native";

const textarea = StyleSheet.create({
  parent: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30
  },

  icon: {
    fontSize: 30,
    borderWidth: 1,
    borderColor: "#b2bec3",
    height: 120,
    borderRightWidth: 0,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    lineHeight: 40
  },

  field: {
    borderWidth: 1,
    borderColor: "#b2bec3",
    height: 120,
    width: "100%",
    borderTopEndRadius: 5,
    borderBottomRightRadius: 5,
    paddingHorizontal: 5,
    borderLeftWidth: 0,
    marginLeft: -1
  }
});

export default textarea;
