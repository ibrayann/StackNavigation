import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors } from "../constants/colors";

export default function MyButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "90%",
    height: 45,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    color: Colors.ligth,
    fontSize: 16,
    fontWeight: "bold",
  },
});
