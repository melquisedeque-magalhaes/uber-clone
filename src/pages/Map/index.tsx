import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar'
import MapView from 'react-native-maps'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { 
  requestForegroundPermissionsAsync, 
  getCurrentPositionAsync, 
  LocationAccuracy 
} from 'expo-location'
import Ionicons from '@expo/vector-icons/Ionicons'

import { ContainerMap, ButtonBack } from "./styles";
import { SearchInput } from "../../components/SearchInput";

export interface Region {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  }

export function Map() {

    const navigator = useNavigation()

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

    return (
        <ContainerMap>

            <StatusBar style="dark" />

            <MapView 
              style={{ flex: 1 }}
              region={region}
              initialRegion={region}
              showsUserLocation
            />

            <ButtonBack onPress={() => navigator.goBack()}>
              <Ionicons name="arrow-back" size={24} color="#fff" />
            </ButtonBack>

            <SearchInput />
        </ContainerMap>
    )
}