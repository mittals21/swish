import { View } from "react-native"
import React from "react"
import { Tabs } from "expo-router"
import Entypo from "@expo/vector-icons/Entypo"
import FontAwesome5 from "@expo/vector-icons/FontAwesome5"
import Ionicons from "@expo/vector-icons/Ionicons"
import FontAwesome6 from "@expo/vector-icons/FontAwesome6"

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#DB3022",
        tabBarInactiveTintColor: "#9B9B9B",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 0,
          borderTopColor: "#FFFFFF",
          height: 70,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontFamily: "msb", // Change this to your actual font name from tailwind.config.js
          fontSize: 10, // Adjust font size if needed
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",

          headerShown: false,
          tabBarIcon: ({
            color,
            focused,
          }: {
            color: string
            focused: boolean
          }) => (
            <View>
              <Entypo name="home" size={25} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: "Shop",
          headerShown: false,
          tabBarIcon: ({
            color,
            focused,
          }: {
            color: string
            focused: boolean
          }) => (
            <View>
              <FontAwesome5 name="shopping-cart" size={22} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Bag",
          headerShown: false,
          tabBarIcon: ({
            color,
            focused,
          }: {
            color: string
            focused: boolean
          }) => (
            <View>
              <FontAwesome5 name="shopping-bag" size={24} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="favourites"
        options={{
          title: "Favourites",
          headerShown: false,
          tabBarIcon: ({
            color,
            focused,
          }: {
            color: string
            focused: boolean
          }) => (
            <View>
              <Ionicons name="heart" size={26} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({
            color,
            focused,
          }: {
            color: string
            focused: boolean
          }) => (
            <View>
              <FontAwesome6 name="user-large" size={24} color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
