import { StyleSheet } from "react-native";

const button = StyleSheet.create({
  parent: {
    height: 40,
    width: 200,
    borderRadius: 5,
    marginVertical: 30
  },

  center: {
    alignSelf: "center"
  },

  right: {
    alignSelf: "flex-end"
  },

  text: {
    fontSize: 16,
    textAlign: "center",
    lineHeight: 40
  }
});

export default button;
