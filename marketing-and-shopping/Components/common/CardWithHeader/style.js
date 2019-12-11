import { StyleSheet } from "react-native";

const card = StyleSheet.create({
  parent: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },

  cardContainer: {
    width: 150,
    height: 185,
    marginBottom: 30
  },

  img: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginBottom: 10
  },

  text: {
    fontSize: 16,
    textAlign: "center"
  }
});

export default card;
