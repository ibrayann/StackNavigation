import { Text, View, Button } from "react-native";
import { styles } from "../styles/grobal";
import { AddContacts } from "../components/AddContact";
import { ContactsList } from "../components/ContactsList";
import { ContactsProvider } from "../reducers/contactReducer";

const initialState = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Doe",
  },
  {
    id: 3,
    name: "Jane",
  },
];

export function Contacts() {
  /* const [contacts, dispatch] = useReducer(contactReducer, initialState); */
  /* 
  const handleAddContact = (name) => {
    dispatch({ type: "ADD_CONTACT", payload: { id: Date.now(), name } });
  };
  const handleDeleteContact = (id) => {
    dispatch({ type: "REMOVE_CONTACT", payload: { id } });
  };

  const handleEditContact = (contact) => {
    dispatch({ type: "EDIT_CONTACT", payload: { contact } });
  }; */

  /* const handleAddContact = (name) => {
    setContacts([
      ...contacts,
      {
        id: Date.now(),
        name,
      },
    ]);
  };
  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleEditContact = (contact) => {
    setContacts(
      contacts.map((item) => (item.id === contact.id ? contact : item))
    );
  }; */

  return (
    <ContactsProvider>
      <View style={styles.simpleContainer}>
        <AddContacts />
        <ContactsList />
      </View>
    </ContactsProvider>
  );
}

/*   return (
      <View style={styles.simpleContainer}>
        <AddContacts onAddContact={handleAddContact} />
        <ContactsList
          contacts={contacts}
          onDeleteContact={handleDeleteContact}
          onEditContact={handleEditContact}
        />
      </View>
  );
}
 */
