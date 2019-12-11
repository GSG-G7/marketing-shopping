import { StyleSheet } from "react-native";

const headerLanding = StyleSheet.create({
  parent: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#b2bec3",
    shadowRadius: 10,
    shadowOpacity: 1
  },

  logo: {
    height: 60,
    width: 120,
    justifyContent: "center"
  },
  logoText: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center"
  },

  signUpBtn: {
    height: 40,
    width: 100,
    marginRight: 20,
    borderRadius: 5,
    justifyContent: "center"
  },
  signUpBtnText: {
    textAlign: "center",
    fontSize: 16
  }
});

export default headerLanding;
