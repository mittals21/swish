import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import React, { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { router } from "expo-router"
import InputField from "./ui/input-field"
import { isValidEmail } from "@/utils/checkEmail"

const SignIn = () => {
  const [inputData, setInputData] = useState({ email: "", password: "" })
  const [errors, setErrors] = useState({ email: "", password: "" })

  const handleInputChange = (name: string, value: string) => {
    setInputData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const handleLogin = () => {
    router.push("/(tabs)/home")

    const newErrors = { email: "", password: "" }

    if (!inputData.email) newErrors.email = "Email is required"
    else if (!isValidEmail(inputData.email))
      newErrors.email = "Invalid email format"

    if (!inputData.password) newErrors.password = "Password is required"
    else if (inputData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters"

    setErrors(newErrors)

    if (!newErrors.email && !newErrors.password) {
      router.push("/(tabs)/home")
      console.log("Login Successful!")
    }
  }

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
          <InputField
            name="email"
            inputValue={inputData.email}
            setInput={handleInputChange}
            placeholder="Email"
            errorMessage={errors.email}
          />
          <InputField
            name="password"
            inputValue={inputData.password}
            setInput={handleInputChange}
            placeholder="Password"
            inputType="password"
            errorMessage={errors.password}
          />

          <Text
            className="text-secondary w-full text-right px-6"
            onPress={() => router.push("/(auth)/forgot-password")}
          >
            Forgot Password?
          </Text>

          <TouchableOpacity
            onPress={handleLogin}
            className="py-4 px-10 rounded-full w-[90%] mt-10 bg-secondary"
          >
            <Text className="text-white font-medium text-xl text-center">
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          className="w-full px-6"
          onPress={() => router.push("/(auth)/sign-up")}
        >
          <Text className="text-center text-secondary text-lg">
            Don't have an account? <Text className="text-red-500">Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
