import { View, Text, ScrollView, Image } from "react-native"
import React from "react"
import Ionicons from "@expo/vector-icons/Ionicons"
import { products } from "@/assets/dummyData/products"

const SaleProducts = () => {
  return (
    <View className="mt-10">
      <View className="flex-row items-center justify-between px-6">
        <View className="">
          <Text className="text-4xl font-bold text-black">Sale</Text>
          <Text className="text-black text-base ">Super summer sale</Text>
        </View>
        <Text className="text-base">View all</Text>
      </View>
      <View className="flex-row ">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {products?.map((e, idx) => (
            <View className="px-3 pl-6 py-3 relative" key={idx}>
              <Image
                source={{ uri: e?.images[0] }}
                className="w-[148px] h-[184px] rounded-lg"
                resizeMode="cover"
              />
              <View className="bg-black absolute top-7 left-9 px-3 py-1 rounded-full">
                <Text className="text-white text-sm text-center">New</Text>
              </View>
              <View
                className="bg-gray-100 absolute bottom-14 right-0 rounded-full p-3 justify-center items-center"
                style={{
                  backgroundColor: "white",
                  elevation: 5,
                }}
              >
                <Ionicons name="heart-outline" size={20} color="black" />
              </View>

              <Text className="text-lg font-bold mt-2">{e?.title}</Text>
              <Text className="text-base font-bold text-black">
                ${e?.price}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

export default SaleProducts
