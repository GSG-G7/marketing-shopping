import { StyleSheet } from "react-native";

const textarea = StyleSheet.create({
  parent: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30
  },

  icon: {
    fontSize: 30,
    height: 120,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    lineHeight: 40,
    paddingHorizontal: 5
  },

  field: {
    height: 120,
    width: "100%",
    borderTopEndRadius: 5,
    borderBottomRightRadius: 5,
    paddingHorizontal: 5,
    borderLeftWidth: 0,
    lineHeight: 40
  }
});

export default textarea;
