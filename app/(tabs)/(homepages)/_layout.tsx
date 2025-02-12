import { View, Text } from "react-native"
import React from "react"
import { Stack } from "expo-router"

const Homepages = () => {
  return (
    <Stack>
      <Stack.Screen name="fashion" options={{ headerShown: false }} />
      <Stack.Screen name="clothes" options={{ headerShown: false }} />
      <Stack.Screen name="collection" options={{ headerShown: false }} />
    </Stack>
  )
}

export default Homepages
