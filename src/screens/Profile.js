import { Text, View } from "react-native";
import { styles } from "../styles/grobal";
import MyButton from "../components/MyButton";
import { signOut } from "../features/auth/auth";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Profile() {
  const dispatch = useDispatch();

  const signOutProfile = async () => {
    try {
      await AsyncStorage.removeItem("@token");
      dispatch(signOut());
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <MyButton title="Logout" onPress={() => signOutProfile()} />
    </View>
  );
}
