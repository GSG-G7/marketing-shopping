import { StyleSheet } from "react-native";

const sidebar = StyleSheet.create({
  overlay: {
    position: "fixed",
    height: "100%",
    backgroundColor: "rgba(45, 52, 54, .7)",
    width: "100%",
    alignSelf: "flex-end",
    zIndex: 99
  },

  parent: {
    height: "100%",
    width: "80%",
    alignSelf: "flex-end"
  },

  logo: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    position: "relative"
  },
  logoText: {
    fontSize: 40
  },
  cancel: {
    position: "absolute",
    top: "calc(50% - 17.5)",
    right: 20
  },
  cancelText: {
    fontSize: 35
  },

  containerImg: {
    width: 120,
    height: 120,
    margin: "auto",
    marginVertical: 40,
    borderRadius: "50%",
    padding: 3,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#2d3436"
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: "50%"
  },

  containerLinks: {
    height: "35%",
    justifyContent: "space-between"
  },
  containerLinksText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18
  }
});

const headerWithoutMenu = StyleSheet.create({
  parent: {
    height: 60,
    flexDirection: "row",
    alignItems: "center"
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

export { sidebar };
export default headerWithoutMenu;
