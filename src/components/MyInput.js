import { TextInput, Text, View, StyleSheet } from "react-native";
import { Colors } from "../constants/colors";

export default function MyInput({
  label,
  value,
  onChangeText,
  secureTextEntry,
}) {
  return (
    <View style={styless.container}>
      <TextInput
        placeholder={label}
        style={styless.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styless = StyleSheet.create({
  container: {
    width: "90%",
    height: 45,
    justifyContent: "center",
    margin: 10,
    padding: 10,
    backgroundColor: Colors.ligth,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
});
