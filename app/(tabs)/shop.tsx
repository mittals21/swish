import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import Ionicons from "@expo/vector-icons/Ionicons"
import { useNavigation } from "expo-router"
import CategoryTabs from "@/components/shop/category-tabs"

const Shop = () => {
  const navigation = useNavigation()

  return (
    <View>
      <View className="flex-row items-center pt-14 pb-5 px-5 bg-white shadow-2xl z-10 absolute top-0 left-0 right-0"  >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="flex-1 text-center text-lg font-mb">Categories</Text>
        <Ionicons name="search" size={24} color="black" />
      </View>

      <CategoryTabs />
    </View>
  )
}

export default Shop
