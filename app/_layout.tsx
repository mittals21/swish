import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { StatusBar } from "expo-status-bar"
import { useEffect } from "react"
import { useFonts } from "expo-font"
import "react-native-reanimated"
import "../global.css"

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded] = useFonts({
    mb: require("../assets/fonts/Montserrat-Bold.ttf"),
    mbi: require("../assets/fonts/Montserrat-BoldItalic.ttf"),
    meb: require("../assets/fonts/Montserrat-ExtraBold.ttf"),
    mel: require("../assets/fonts/Montserrat-ExtraLight.ttf"),
    ml: require("../assets/fonts/Montserrat-Light.ttf"),
    mm: require("../assets/fonts/Montserrat-Medium.ttf"),
    m: require("../assets/fonts/Montserrat-Regular.ttf"),
    msb: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    msbi: require("../assets/fonts/Montserrat-SemiBoldItalic.ttf"),
  })

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync()
  }, [loaded])

  if (!loaded) return null



  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      {/* <StatusBar style="auto" /> */}
      <StatusBar 
        style="dark" 
        backgroundColor="transparent" 
        translucent
      />
    </>
  )
}
