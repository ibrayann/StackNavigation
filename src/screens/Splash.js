import { ActivityIndicator, Text, View } from "react-native";
import { styles } from "../styles/grobal";

export default function Splash() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
      <Text style={styles.title}>Welcome...</Text>
    </View>
  );
}
