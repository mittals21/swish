import { View, Text, ScrollView } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import Fashion from "./(homepages)/fashion"
const HomePage = () => {
  return (
    <ScrollView>
      <View className="bg-primary flex-1">
        <Fashion />
      </View>
    </ScrollView>
  )
}

export default HomePage
