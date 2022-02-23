import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Karla_500Medium,
  Karla_300Light,
} from "@expo-google-fonts/karla";
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
