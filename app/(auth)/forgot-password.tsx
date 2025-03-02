import { useState } from "react"
import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { isValidEmail } from "@/utils/checkEmail"
import { router } from "expo-router"
import InputField from "./ui/input-field"

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("")
  const [error, setError] = useState<string>("")

  const handleInputChange = (_: string, value: string) => {
    setEmail(value)
    if (error) setError("") // Clear error when user types
  }

  const handleContinue = () => {
    if (!email || !isValidEmail(email)) {
      setError("Please provide a valid email")
      return
    }

    console.log("Reset link sent to:", email)
    // router.push("/auth/verify-email")  screen
  }

  return (
    <SafeAreaView className="bg-primary">
      <ScrollView
        contentContainerStyle={{ height: "100%" }}
        contentContainerClassName="py-44"
      >
        <Text className="text-black font-bold text-5xl w-full px-6 mb-20">
          Forgot Password
        </Text>

        <Text className="text-base font-medium px-6 mb-5">
        Please, enter your email address. You will receive a link to create a new password via email.
        </Text>

        <View className="items-center gap-3">
          <InputField
            name="email"
            inputValue={email}
            setInput={handleInputChange}
            placeholder="Enter your email"
            errorMessage={error}
          />

          <TouchableOpacity
            onPress={handleContinue}
            className="py-4 px-10 rounded-full w-[90%] mt-8 bg-secondary"
          >
            <Text className="text-white font-medium text-xl text-center">
              SEND
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ForgotPassword
