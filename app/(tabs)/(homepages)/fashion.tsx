import { View, Text, Image, TouchableOpacity } from "react-native"
import React from "react"
import homeImg from "../../../assets/images/homeImage.jpg"
import { router } from "expo-router"
import NewProducts from "@/components/home/common/new-products"
const Fashion = () => {
  return (
    <View className="">
      <View>
        <Image
          source={homeImg}
          className="w-[417px] h-[628px] relative"
          // resizeMode="contain"
        />
        <View className="absolute bottom-16 -left-2">
          <Text className="text-white font-extrabold text-6xl w-full px-6">
            Fashion
          </Text>
          <Text className="text-white font-extrabold text-6xl w-full px-6">
            Sale
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/(homepages)/clothes")}
            className="py-3 px-10 rounded-full w-[70%] mt-5 bg-secondary left-5"
          >
            <Text className="text-white font-medium text-lg text-center">
              Check
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <NewProducts />
    </View>
  )
}

export default Fashion
