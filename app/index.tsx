import { Text, ScrollView, Image, TouchableOpacity } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import logo from "../assets/images/logo.jpeg"
import { router } from "expo-router"

const Home = () => {
  return (
    <SafeAreaView className="bg-primary">
      <ScrollView
        contentContainerStyle={{ height: "100%" }}
        contentContainerClassName="justify-center items-center"
      >
        <Image
          source={logo}
          className="w-[250px] h-[250px] rounded-full "
          resizeMode="contain"
        />
        <Text className="text-black text-5xl text-center font-bold mt-3">
          Swish
        </Text>
        <Text className="text-black text-2xl text-center font-semibold italic">
          Effortless Style, Everyday
        </Text>
        <TouchableOpacity
          onPress={() => router.push("/(auth)/sign-in")}
          className="py-4 px-10 rounded-2xl w-[80%] mt-10 bg-secondary"
        >
          <Text className="text-white font-medium text-xl text-center">
            Get Started
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
