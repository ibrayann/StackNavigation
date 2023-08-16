import { Text, View, Button } from "react-native";
import { styles } from "../../styles/grobal";
import MyInput from "../../components/MyInput";
import MyButton from "../../components/MyButton";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignUp</Text>
      <MyInput label="Email" />
      <MyInput label="Password" secureTextEntry={true} />
      <MyButton title="Sign Up" />
      <MyButton title="Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}
