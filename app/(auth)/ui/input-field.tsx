import React from "react"
import { View, TextInput, Text } from "react-native"

const InputField = ({
  name,
  inputValue,
  inputType,
  setInput,
  placeholder,
  css,
  errorMessage,
}: {
  name: string
  inputValue?: string | number
  inputType?: string
  setInput: (field: string, text: string) => void
  placeholder: string
  css?: string
  errorMessage?: string
}) => {
  return (
    <View className={`w-[90%] ${css}`}>
      <View className="bg-white rounded-md px-5 py-3">
        <TextInput
          value={inputValue?.toString()}
          onChangeText={(e) => setInput(name, e)}
          keyboardType={inputType === "email" ? "email-address" : "default"}
          secureTextEntry={inputType === "password"}
          placeholder={placeholder}
          placeholderTextColor="gray"
          className="outline-none placeholder:text-gray-400 font-m text-lg"
        />
      </View>
      {errorMessage && <Text className="text-red-500 text-xs font-msb mt-1 px-2">{errorMessage}</Text>}
    </View>
  )
}

export default InputField
