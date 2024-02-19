import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const Layout = () => {
  return (
    <Tabs 
      screenOptions={{
        tabBarActiveTintColor: Colors.light.primary,
        tabBarLabelStyle: {
          fontFamily: 'mon-sb',
        }
      }}
    >
      <Tabs.Screen name='index' options={{
        tabBarLabel: 'HOME',
        tabBarIcon: ({color, size}) =>
        <Ionicons name='home-outline' color={color} size={size} />

      }}
      />
    </Tabs>
  )
}

export default Layout