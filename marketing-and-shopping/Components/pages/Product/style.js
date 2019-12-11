import { StyleSheet } from "react-native";

const product = StyleSheet.create({
  img: {
    width: "100%",
    height: 250
  },
  content: {
    zIndex: -1
  }
});

const about = StyleSheet.create({
  parent: {
    marginVertical: 30
  },

  header: {
    fontSize: 25,
    fontWeight: "bold"
  },

  info: {
    flexDirection: "row",
    marginVertical: 3
  },

  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 5
  },

  details: {
    fontSize: 16
  },

  desc: {
    flexDirection: "column"
  }
});

const similar = StyleSheet.create({
  text: {
    marginBottom: 15,
    fontSize: 20,
    fontWeight: "bold"
  }
});

export { about, similar };
export default product;
