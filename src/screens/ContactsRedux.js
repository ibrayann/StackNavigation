import { Text, View, Button, Pressable } from "react-native";
import { styles } from "../styles/grobal";
import { useSelector, useDispatch } from "react-redux";
import { removeContact } from "../features/contacts/contacts";

export function ContactsRedux() {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  return (
    <View style={styles.simpleContainer}>
      <Text style={styles.title}>Contacts</Text>
      {contacts.map((contact, index) => {
        return (
          <Pressable
            key={index}
            onPress={() => dispatch(removeContact(contact.id))}
          >
            <Text>{contact.name}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
