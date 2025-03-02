import { View, Text, Image, TouchableOpacity, BackHandler } from "react-native"
import React, { useEffect, useState } from "react"
import homeImg from "../../assets/images/homeImage.jpg"
import streetImg from "../../assets/images/clothes.jpg"
import NewProducts from "../home/common/new-products"
import SaleProducts from "../home/common/sale-products"
import Ionicons from "@expo/vector-icons/Ionicons"




const Fashion = () => {
  const [isStreetFashion, setIsStreetFashion] = useState(false)

  useEffect(() => {
    if (!isStreetFashion) return

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        setIsStreetFashion(false)
        return true
      }
    )

    return () => backHandler.remove()
  }, [isStreetFashion])

  return (
    <View>
      <View>
        <Image
          source={isStreetFashion ? streetImg : homeImg}
          className={`${
            isStreetFashion ? "h-[230px] w-full" : "w-full h-[628px]"
          }  relative`}
          resizeMode="cover"
        />
        <View
          className={`${
            isStreetFashion
              ? "absolute bottom-1 -left-2"
              : "absolute bottom-16 -left-2"
          } `}
        >
          <Text
            className={`text-white font-meb w-full px-6 py-1 ${
              isStreetFashion ? "text-5xl tracking-tighter" : "text-6xl"
            }`}
          >
            {isStreetFashion ? "Street Clothes" : "Fashion"}
          </Text>
          <Text
            className={`${
              isStreetFashion ? "" : "text-white font-meb text-6xl w-full px-6"
            }`}
          >
            {isStreetFashion ? "" : "Sale"}
          </Text>

          {!isStreetFashion && (
            <TouchableOpacity
              onPress={() => setIsStreetFashion(true)}
              className="py-3 px-10 rounded-full w-[70%] mt-5 bg-secondary left-5"
            >
              <Text className="text-white font-mb text-lg text-center">
                Check
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {isStreetFashion && <SaleProducts />}
      <NewProducts />
    </View>
  )
}

export default Fashion
