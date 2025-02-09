import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import React, { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { router } from "expo-router"
import InputField from "./ui/input-field"
import { isValidEmail } from "@/utils/checkEmail"

const SignUp = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState({ name: "", email: "", password: "" })

  const handleInputChange = (name: string, value: string) => {
    setInputData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const handleSignUp = () => {
    const newErrors = { name: "", email: "", password: "" }

    if (!inputData.name) newErrors.name = "Name is required"
    if (!inputData.email) newErrors.email = "Email is required"
    else if (!isValidEmail(inputData.email))
      newErrors.email = "Invalid email format"

    if (!inputData.password) newErrors.password = "Password is required"
    else if (inputData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters"

    setErrors(newErrors)

    if (!newErrors.name && !newErrors.email && !newErrors.password) {
      router.push("/(tabs)/home-page")
      console.log("Sign Up Successful!")
    }
  }

  return (
    <SafeAreaView className="bg-primary">
      <ScrollView
        contentContainerStyle={{ height: "100%" }}
        contentContainerClassName="justify-between py-44"
      >
        <Text className="text-secondary font-bold text-5xl w-full px-6">
          Sign Up
        </Text>

        <View className="items-center gap-3">
          <InputField
            name="name"
            inputValue={inputData.name}
            setInput={handleInputChange}
            placeholder="Name"
            errorMessage={errors.name}
          />
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

          <TouchableOpacity
            onPress={handleSignUp}
            className="py-4 px-10 rounded-full w-[90%] mt-10 bg-secondary"
          >
            <Text className="text-white font-medium text-xl text-center">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          className="w-full px-6"
          onPress={() => router.push("/(auth)/sign-in")}
        >
          <Text className="text-center text-secondary text-lg">
            Already have an account? <Text className="text-red-500">Login</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp
