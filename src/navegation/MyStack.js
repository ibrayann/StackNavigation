import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";
import { Settings } from "../screens/Settings";
import { Text, View } from "react-native";
import { Colors } from "../constants/colors";
import MybuttomTab from "./MyButtonTab";
import Onboarding from "../screens/Onboarding";

const HomeStack = createStackNavigator();

const CustomHeader = ({ title }) => {
  return (
    <View
      style={{
        height: 100,
        width: "100%",
        backgroundColor: Colors.secondary,
        padding: 10,
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: Colors.ligth,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

const myConfig = {
  headerShown: false,
  headerTitleAlign: "center",
  presentation: "modal",
};

export function MyStack() {
  return (
    <HomeStack.Navigator initialRouteName="Home" screenOptions={myConfig}>
      <HomeStack.Screen name="Root" component={MybuttomTab} />
      <HomeStack.Group
        screenOptions={{
          headerShown: true,
        }}
      >
        <HomeStack.Screen
          name="Settings"
          component={Settings}
          options={{
            headerBackTitle: "Home",
          }}
        />
        <HomeStack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            headerShown: false,
          }}
        />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
}
