import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { AntDesign, Feather, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'

export default function _layout() {
  return (
    <Tabs screenOptions={{
      tabBarStyle:{
        backgroundColor: Colors.bgColor,
        borderTopWidth:0,
        padding:0,
        borderRadius:20
      },
      tabBarShowLabel:false,
      tabBarActiveTintColor:Colors.white,
      tabBarInactiveTintColor:'#999',
      tabBarActiveBackgroundColor:Colors.primaryColor,
      
    }}>
      <Tabs.Screen 
        name='index' 
        options={{ 
          tabBarIcon: ({ color }) => (
            <AntDesign name='home' size={28} color={color} />
          )
        }}
      />
      <Tabs.Screen 
        name='explore' 
        options={{ 
          tabBarIcon: ({ color }) => (
            <Feather name='compass' size={28} color={color} />
          )
        }}
      />
      <Tabs.Screen 
        name='bookmark' 
        options={{ 
          tabBarIcon: ({ color }) => (
            <Ionicons name='bookmark-outline' size={28} color={color} />
          )
        }}
      />

      <Tabs.Screen 
        name='profile' 
        options={{ 
          tabBarIcon: ({ color }) => (
            <FontAwesome name='user' size={28} color={color} />
          )
        }}
      />
      
    </Tabs>
  )
}