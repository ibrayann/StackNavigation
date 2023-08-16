import { createDrawerNavigator } from "@react-navigation/drawer";
import { Notifications } from "../screens/Notifications";
import { MyStack } from "./MyStack";
import { Pressable } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../constants/colors";

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: Colors.secondary,
      }}
    >
      <Drawer.Screen
        name="MyStack"
        component={MyStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Notications"
        component={Notifications}
        options={{
          drawerIcon: ({ color, size }) => (
            <SimpleLineIcons
              style={{ marginLeft: 15 }}
              name="drawer"
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
