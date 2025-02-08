import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { router } from "expo-router"

const SignIn = () => {
  return (
    <SafeAreaView className="bg-primary">
      <ScrollView
        contentContainerStyle={{ height: "100%" }}
        contentContainerClassName="justify-between py-44"
      >
        <Text className="text-secondary font-bold text-5xl w-full px-6">
          Login
        </Text>

        <View className="items-center gap-3">
          <View className="bg-white w-[90%] rounded-md px-5 py-3">
            <TextInput
              placeholder="Email"
              className="outline-none placeholder:text-gray-400 text-lg"
            />
          </View>
          <View className="bg-white w-[90%] rounded-md px-5 py-3">
            <TextInput
              placeholder="Password"
              className="outline-none placeholder:text-gray-400 text-lg"
            />
          </View>
          <Text className="text-secondary w-full text-right px-6">
            Forgot Password?
          </Text>
          <TouchableOpacity
            // onPress={() => router.push("/(auth)/sign-in")}
            className="py-4 px-10 rounded-full w-[90%] mt-10 bg-secondary"
          >
            <Text className="text-white font-medium text-xl text-center">
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity className=" w-full px-6" onPress={() => router.push("/(auth)/sign-up")} >
          <Text className="text-center text-secondary text-lg">
            Don't have an account? <Text className="text-red-500">Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
