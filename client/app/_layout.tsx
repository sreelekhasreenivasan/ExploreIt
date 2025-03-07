import { Stack } from 'expo-router';
import 'react-native-reanimated';


export default function RootLayout() {

  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ presentation: 'modal' }} />
        <Stack.Screen name="signup" options={{ presentation: 'modal' }} />
      </Stack>
  );
}