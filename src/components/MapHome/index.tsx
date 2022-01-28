import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationAccuracy } from 'expo-location'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../interfaces/RoutesInterface';

import { ContainerMap, MapView, MapText } from './styles'

export interface Region {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
}

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export function MapHome(){

    const navigator = useNavigation<HomeScreenNavigationProp>()

    const [region, setRegion] = useState({
        latitude: -15.7484976,
        longitude: -48.2692181,
        latitudeDelta: 0.0143,
        longitudeDelta: 0.0134
      } as Region)
    
      useEffect(() => {
        async function handleCurrentLocation() {
          const { status } = await requestForegroundPermissionsAsync()
    
          if (status !== "granted")
            Alert.alert('Permisão negada da geolocalização !')
    
          const { coords: {
            latitude,
            longitude
          } } = await getCurrentPositionAsync({
            accuracy: LocationAccuracy.Highest
          })
    
          setRegion({ 
            latitude, 
            longitude, 
            latitudeDelta: 0.0143, 
            longitudeDelta: 0.0134 
          })
    
        }
    
        handleCurrentLocation()
      }, [region])

      function handleNextPage(){
        navigator.navigate('Map')
      }

    return (
        <ContainerMap onPress={handleNextPage}>
  
            <MapText>Perto de você</MapText>

            <MapView
                region={region}
                initialRegion={region}
                showsUserLocation
            />
        </ContainerMap>
    )
}