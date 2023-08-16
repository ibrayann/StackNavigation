import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/AuthScreens/Login";
import SignUp from "../screens/AuthScreens/SignUp";

const Stack = createStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
