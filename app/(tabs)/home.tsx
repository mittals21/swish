import { View, Text, ScrollView } from "react-native"
import React from "react"
import Fashion from "@/components/home/fashion"
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
