import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../pages/Home'
import { Map } from '../pages/Map'
import { RootStackParamList } from '../interfaces/RoutesInterface'
import { SearchPlaces } from '../pages/SearchPlaces'

export function Routes(){

    const Stack = createNativeStackNavigator<RootStackParamList>()

    return(
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerShown: false
                }} 
                initialRouteName="Home"
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Map" component={Map} />
                <Stack.Screen name="SearchPlaces" component={SearchPlaces} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}