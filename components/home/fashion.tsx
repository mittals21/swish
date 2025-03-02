import { View, Text, Image, TouchableOpacity } from "react-native"
import React, { useState } from "react"
import homeImg from "../../assets/images/homeImage.jpg"
import streetImg from "../../assets/images/clothes.jpg"
import NewProducts from "../home/common/new-products"
import SaleProducts from "../home/common/sale-products"
import Ionicons from "@expo/vector-icons/Ionicons"
import { SafeAreaView } from "react-native-safe-area-context"
const Fashion = () => {
  const [isStreetFashion, setIsStreetFashion] = useState(false)

  return (
    <SafeAreaView>
      <View>
        <Image
          source={isStreetFashion ? streetImg : homeImg}
          className={`${
            isStreetFashion ? "h-[230px] w-full" : ""
          } w-full h-[628px] relative`}
          resizeMode="cover"
        />
        <View
          className={`${
            isStreetFashion
              ? "absolute bottom-5 -left-2"
              : "absolute bottom-16 -left-2"
          } `}
        >
          <Text
            className={`text-white font-extrabold w-full px-6 ${
              isStreetFashion ? "text-4xl" : "text-6xl"
            }`}
          >
            {isStreetFashion ? "Street Clothes" : "Fashion"}
          </Text>
          <Text
            className={`${
              isStreetFashion
                ? ""
                : "text-white font-extrabold text-6xl w-full px-6"
            }`}
          >
            {isStreetFashion ? "" : "Sale"}
          </Text>

          {isStreetFashion ? (
            <TouchableOpacity
              onPress={() => setIsStreetFashion(false)}
              className="rounded-full w-12 h-12 flex justify-center items-center bg-secondary left-5 absolute bottom-40"
            >
                <Ionicons name="arrow-back" size={20} color="white" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setIsStreetFashion(true)}
              className="py-3 px-10 rounded-full w-[70%] mt-5 bg-secondary left-5"
            >
              <Text className="text-white font-medium text-lg text-center">
                Check
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {isStreetFashion && <SaleProducts />}
      <NewProducts />
    </SafeAreaView>
  )
}

export default Fashion
