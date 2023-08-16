import { Text, View, Button } from "react-native";
import { styles } from "../styles/grobal";
import { useNavigation } from "@react-navigation/native";
import Card from "../components/Card";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Home() {
  const navigation = useNavigation();

  const firstLaunch = async () => {
    const first = await AsyncStorage.getItem("@firstLaunch");
    if (first === null) {
      await AsyncStorage.setItem("@firstLaunch", "true");
      navigation.navigate("Onboarding");
    }
  };

  useEffect(() => {
    firstLaunch();
  }, []);

  return (
    <View style={styles.container}>
      <Card />
    </View>
  );
}
