import React, { useState, useEffect } from 'react';
import { FlatList, View, SafeAreaView, ImageSourcePropType, ScrollView, Alert } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location'

import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';

import {
  Container,
  Input,
  InputContainer,
  InputText,
  MarkDate,
  MarkDateContainer,
  MarkDateSeparator,
  MarkDateText,
  ContainerCardsMenu,
  Map,
  MapText,
  ContainerMap
} from './styles';

import CarImage from './assets/car_card.png'
import supermarketImage from './assets/supermarket.png'
import packageImage from './assets/package.png'

import { MarketCard } from './src/components/MarketCard';
import { AddressCard } from './src/components/AddressCard';
import { Cards } from './src/components/Cards';

interface MenuData {
  id: number;
  name: string;
  url: ImageSourcePropType;
}

export interface Region {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export default function App() {

  const [menus, setMenus] = useState<MenuData[]>([])
  const [region, setRegion] = useState({
    latitude: -15.7484976,
    longitude: -48.2692181,
    latitudeDelta: 100,
    longitudeDelta: 100
  } as Region)



  useEffect(() => {
    async function handleCurrentLocation() {
      const { status } = await requestForegroundPermissionsAsync()

      if (status !== "granted")
        Alert.alert('Permisão negada da geolocalização !')

      const { coords: {
        latitude,
        longitude
      } } = await getCurrentPositionAsync()

      setRegion({ latitude, longitude, latitudeDelta: 100, longitudeDelta: 100 })

    }

    handleCurrentLocation()
  }, [region])

  const data = [
    {
      id: 1,
      name: 'Viagem',
      url: CarImage
    }, {
      id: 2,
      name: 'Entrega',
      url: packageImage
    }, {
      id: 3,
      name: 'Mercado',
      url: supermarketImage
    }
  ]

  useEffect(() => {
    setMenus(data)
  }, [])


  return (
    <>
      <StatusBar style="light" backgroundColor="#111" />
      <Container>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <SafeAreaView
            style={{ flex: 1 }}
          >

            <View style={{ flex: 1 }}>
              <MarketCard />

              <ContainerCardsMenu>
                <FlatList
                  data={menus}
                  keyExtractor={item => String(item.id)}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <Cards name={item.name} url={item.url} />
                  )}
                />
              </ContainerCardsMenu>

            </View>

            <View style={{ flex: 1 }}>
              <InputContainer>
                <Input>
                  <InputText>Para Onde ?</InputText>
                </Input>

                <MarkDateContainer>
                  <MarkDateSeparator />
                  <MarkDate>
                    <FontAwesome name="clock-o" size={20} color="#fff" />
                    <MarkDateText>Agora</MarkDateText>
                    <Feather name="chevron-down" size={20} color="#fff" />
                  </MarkDate>
                </MarkDateContainer>

              </InputContainer>

              <AddressCard />
              <AddressCard />
            </View>

            <ContainerMap style={{ flex: 1 }}>

              <MapText>Perto de você</MapText>

              <Map
                region={region}
                initialRegion={region}
              />
            </ContainerMap>

          </SafeAreaView>
        </ScrollView>
      </Container>
    </>
  );
}
