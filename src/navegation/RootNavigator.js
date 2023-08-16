import { NavigationContainer } from "@react-navigation/native";
import MyDrawer from "./MyDrawer";
import { AuthStack } from "./AuthStack";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { restoreToken } from "../features/auth/auth";
import { useEffect } from "react";
import Splash from "../screens/Splash";

export function RootNavigator() {
  const { userToken, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const getValue = async () => {
    try {
      const value = await AsyncStorage.getItem("@token");
      if (value !== null) {
        dispatch(restoreToken(value));
      } else {
        dispatch(restoreToken(null));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getValue();
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      {userToken ? <MyDrawer /> : <AuthStack />}
    </NavigationContainer>
  );
}
