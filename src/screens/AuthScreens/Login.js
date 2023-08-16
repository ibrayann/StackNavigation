import { Text, View, Button } from "react-native";
import { styles } from "../../styles/grobal";
import MyInput from "../../components/MyInput";
import MyButton from "../../components/MyButton";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../features/auth/auth";

export default function Login() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [token, setToken] = useState("");

  const save = async (value) => {
    try {
      await AsyncStorage.setItem("@token", value);
      dispatch(signIn(value));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <MyInput label="Email" value={token} onChangeText={setToken} />
      <MyInput label="Password" secureTextEntry={true} />
      <MyButton title="Sign In" onPress={() => save(token)} />
      <MyButton title="SignUp" onPress={() => navigation.navigate("SignUp")} />
    </View>
  );
}
