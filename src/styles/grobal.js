import { StyleSheet } from "react-native";
import { Colors } from "../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center", // horizontal
    justifyContent: "center", // vertical
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.secondary,
  },
  simpleContainer: {
    flex: 1,
    backgroundColor: Colors.ligth,
  },
});
