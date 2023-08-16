import { Text, View, Button, StyleSheet, Pressable } from "react-native";
import MyInput from "../components/MyInput";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useState, useContext } from "react";
import { contactStore } from "../reducers/contactReducer";

export function AddContacts() {
  const [name, setName] = useState("");
  const { handleAddContact } = useContext(contactStore);

  const AddContact = () => {
    handleAddContact(name);
    setName("");
  };

  const navigation = useNavigation();

  return (
    <View style={style.Container}>
      <View style={{ width: "80%" }}>
        <MyInput label="Name" onChangeText={setName} value={name} />
      </View>
      <Pressable onPress={AddContact}>
        <Ionicons name="add" size={24} color="black" />
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  Container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5%",
  },
});
