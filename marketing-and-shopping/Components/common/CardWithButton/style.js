import { StyleSheet } from "react-native";

const card = StyleSheet.create({
  parent: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },

  cardContainer: {
    width: 150,
    height: 205,
    marginBottom: 30
  },

  imgContainer: {
    height: 160,
    marginBottom: 10,
    position: "relative"
  },
  img: {
    width: "100%",
    height: 160,
    borderRadius: 5
  },

  text: {
    fontSize: 16,
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, .8)",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 30,
    lineHeight: 30,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },

  btn: {
    height: 35,
    borderRadius: 5
  },
  btnText: {
    textAlign: "center",
    lineHeight: 35,
    fontSize: 16
  },
  btnDelete: {
    backgroundColor: "#EA2027"
  },
  btnDeleteText: {
    color: "#fff"
  }
});

export default card;
