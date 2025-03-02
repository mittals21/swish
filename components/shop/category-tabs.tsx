import { View, Text, TouchableOpacity } from "react-native"
import React, { useState } from "react"

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState("Women")

  return (
    <View className="relative top-[90px]">
      <View className="flex-row justify-around bg-white shadow-md">
        {["Women", "Men", "Kids"].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            className="flex-1 items-center "
          >
            <Text
              className={`text-lg font-mb py-4  ${
                activeTab === tab ? "text-black " : "text-[#222222] font-mm"
              }`}
            >
              {tab}
            </Text>
            {activeTab === tab && (
              <View className="w-full h-1 bg-red-500"></View>
            )}
          </TouchableOpacity>
        ))}
      </View>

      <View className="p-5">
        {activeTab === "Women" && <Text>Women's Products</Text>}
        {activeTab === "Men" && <Text>Men's Products</Text>}
        {activeTab === "Kids" && <Text>Kids' Products</Text>}
      </View>
    </View>
  )
}

export default CategoryTabs
