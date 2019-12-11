import { StyleSheet } from "react-native";

const input = StyleSheet.create({
  parent: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30
  },

  icon: {
    fontSize: 30,
    height: 40,
    borderRightWidth: 0,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    lineHeight: 40
  },

  field: {
    height: 40,
    width: "100%",
    borderTopEndRadius: 5,
    borderBottomRightRadius: 5,
    paddingHorizontal: 5,
    borderLeftWidth: 0,
    marginLeft: -1
  }
});

export default input;
