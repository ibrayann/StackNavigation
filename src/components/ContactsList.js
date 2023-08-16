import { useState, useMemo, useContext } from "react";
import {
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import MyInput from "./MyInput";
import { Colors } from "../constants/colors";
import { getRandomPhoto } from "../utils/randomPhoto";
import { FontAwesome } from "@expo/vector-icons";
import { contactStore } from "../reducers/contactReducer";

export const ContactsList = () => {
  const { contacts } = useContext(contactStore);
  console.log(contacts);

  return (
    <>
      {contacts.length === 0 && (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            marginTop: "30%",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            No contacts found
          </Text>
        </View>
      )}
      <ScrollView>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ScrollView>
    </>
  );
};

export const Contact = ({ contact }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { handleDeleteContact, handleEditContact } = useContext(contactStore);
  const memoPhoto = useMemo(() => getRandomPhoto(), []);

  const DeleteContact = (id) => {
    handleDeleteContact(id);
  };

  const EditContact = (id, name) => {
    handleEditContact(id, name);
  };

  return (
    <View style={styles.contactContainer}>
      <View style={styles.row}>
        <Image style={styles.image} source={memoPhoto} />
        {isEditing ? (
          <View style={{ maxWidth: "70%" }}>
            <MyInput
              style={styles.name}
              value={contact.name}
              onChangeText={(text) =>
                EditContact({
                  ...contact,
                  name: text,
                })
              }
            />
          </View>
        ) : (
          <Text style={styles.name}>{contact.name}</Text>
        )}
      </View>
      <View style={styles.row}>
        {isEditing ? (
          <Pressable onPress={() => setIsEditing(false)}>
            <FontAwesome
              name="check"
              size={24}
              color="black"
              style={{
                marginRight: 15,
              }}
            />
          </Pressable>
        ) : (
          <Pressable onPress={() => setIsEditing(true)}>
            <FontAwesome
              name="edit"
              size={24}
              color="black"
              style={{
                marginRight: 15,
                marginTop: "10%",
              }}
            />
          </Pressable>
        )}
        <Pressable onPress={() => DeleteContact(contact.id)}>
          <FontAwesome
            name="trash"
            size={24}
            color="black"
            style={{
              marginRight: 15,
            }}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contactContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.gray,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 17,
    fontWeight: "bold",
    color: Colors.dark,
  },
});
