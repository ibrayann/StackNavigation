import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../constants/colors";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { MyTopTap } from "./MyTopTap";

const myTab = createBottomTabNavigator();

export default function MybuttomTab() {
  const navigation = useNavigation();

  return (
    <myTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors.secondary,
      }}
    >
      <myTab.Screen
        name="Welcome"
        component={MyTopTap}
        options={{
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <SimpleLineIcons
                style={{ marginLeft: 15 }}
                name="drawer"
                size={24}
                color="black"
              />
            </Pressable>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate("Settings")}>
              <FontAwesome
                style={{ marginRight: 15 }}
                name="cog"
                size={24}
                color="black"
              />
            </Pressable>
          ),
        }}
      />
      <myTab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <SimpleLineIcons
                style={{ marginLeft: 15 }}
                name="drawer"
                size={24}
                color="black"
              />
            </Pressable>
          ),
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="profile" size={24} color={color} />
          ),
          tabBarBadge: 3,
        }}
      />
    </myTab.Navigator>
  );
}
