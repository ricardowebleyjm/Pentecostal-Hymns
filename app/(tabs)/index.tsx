import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import HSearchBar from '@/components/SearchBar'
import HymnList from '@/components/HymnList'

const Page = () => {
    return (
        <View style={{ flex: 1 }}>
            <Stack.Screen options={{
                header: () => <HSearchBar />
            }}
            />
            <HymnList/>
        </View>
        
    )
}

export default Page