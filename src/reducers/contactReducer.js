import { createContext, useEffect, useReducer } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
const contactStore = createContext(initialState);

function ContactsProvider({ children }) {
  const [contacts, dispatch] = useReducer(contactReducer, initialState);

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    try {
      const contacts = await AsyncStorage.getItem("@contacts");
      if (contacts) {
        const oldContacts = JSON.parse(contacts);
        dispatch({ type: "SET_CONTACTS", payload: { contacts: oldContacts } });
      } else {
        AsyncStorage.setItem("@contacts", JSON.stringify(initialState));
        dispatch({ type: "SET_CONTACTS", payload: { contacts: initialState } });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddContact = (name) => {
    dispatch({ type: "ADD_CONTACT", payload: { id: Date.now(), name } });
  };
  const handleDeleteContact = (id) => {
    dispatch({ type: "REMOVE_CONTACT", payload: { id } });
  };

  const handleEditContact = (contact) => {
    dispatch({ type: "EDIT_CONTACT", payload: { contact } });
  };
  return (
    <contactStore.Provider
      value={{
        contacts,
        handleAddContact,
        handleDeleteContact,
        handleEditContact,
      }}
    >
      {children}
    </contactStore.Provider>
  );
}

export { ContactsProvider, contactStore };

export function contactReducer(contacts = {}, action) {
  switch (action.type) {
    case "SET_CONTACTS":
      return action.payload.contacts;
    case "ADD_CONTACT":
      const newContacts = [
        ...contacts,
        { id: Date.now(), name: action.payload.name },
      ];
      AsyncStorage.setItem("@contacts", JSON.stringify(newContacts));
      return newContacts;
    case "REMOVE_CONTACT":
      const filteredContacts = contacts.filter(
        (contact) => contact.id !== action.payload.id
      );
      AsyncStorage.setItem("@contacts", JSON.stringify(filteredContacts));
      return filteredContacts;
    case "EDIT_CONTACT":
      const updatedContacts = contacts.map((contact) =>
        contact.id === action.payload.contact.id
          ? { ...contact, name: action.payload.contact.name }
          : contact
      );
      AsyncStorage.setItem("@contacts", JSON.stringify(updatedContacts));
      return updatedContacts;
    default:
      return contacts;
  }
}
