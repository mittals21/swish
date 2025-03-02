import { View, Text, Image, ScrollView } from "react-native"
import React from "react"
import { products } from "@/assets/dummyData/products"
import Ionicons from "@expo/vector-icons/Ionicons"

const NewProducts = () => {
  return (
    <View className="mt-10">
      <View className="flex-row items-center justify-between px-6">
        <View className="">
          <Text className="text-4xl font-mb text-black">New</Text>
          <Text className="text-[#777777] text-base font-m tracking-tighter ">
            You've never seen it before!
          </Text>
        </View>
        <Text className="text-base font-msb">View all</Text>
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
                <Text className="text-white text-sm text-center font-m">
                  New
                </Text>
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

              <Text className="text-lg font-mb mt-2">{e?.title}</Text>
              <Text className="text-base font-msb text-black">${e?.price}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

export default NewProducts
