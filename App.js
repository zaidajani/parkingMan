import { StatusBar } from "expo-status-bar";
import { HomeComponent } from "./src/features/home/screen/home.screen";
import {
  useFonts,
  Karla_500Medium,
  Karla_300Light,
} from "@expo-google-fonts/karla";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView as SafeArea, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { Navigation } from "./src/infrastructure/navigation/index";

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_500Medium });

  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
  );
}
