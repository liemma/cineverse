import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import './globals.css';

export default function RootLayout() {
  // Hides group route header
  return (
    <>
      <StatusBar hidden={true}/>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
          />
          <Stack.Screen
          name="movie/[id]"
          options={{ headerShown: false }}
        />
      </Stack>
    </>
  );
}
