import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Home } from "../screens/Home";
import { Contacts } from "../screens/Contacts";
import { ContactsRedux } from "../screens/ContactsRedux";
import { Colors } from "../constants/colors";

const Tab = createMaterialTopTabNavigator();

export const MyTopTap = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.secondary,
        tabBarIndicatorStyle: {
          backgroundColor: Colors.secondary,
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Contacts" component={Contacts} />
      <Tab.Screen name="Redux" component={ContactsRedux} />
    </Tab.Navigator>
  );
};
